import { AuthenticateFailed } from "@/use-case/erros/authenticate-failed";
import { MakeAuthenticate } from "@/use-case/factories/make-authenticate";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function authenticate(request: FastifyRequest, reply: FastifyReply) {

  const bodySchema = z.object({
    
    email: z.string().email(),
    password: z.string().min(6)

  })

  const { email, password } = bodySchema.parse(request.body)

  try {

    const rep = MakeAuthenticate()

    const { user } = await rep.execute({
      email,
      password
    })

    const token = await reply.jwtSign(
      {
        role: user.role
      },
      {
        sign: {
          sub: user.id
        }
      }
    )

    const refreshToken = await reply.jwtSign(
      {
        role: user.role
      },
      {
        sign: {
          sub: user.id,
          expiresIn: '7d'
        }
      }
    )

    return reply
      .setCookie('refreshToken', refreshToken, {
        path: '/',
        secure: true,
        sameSite: true,
        httpOnly: true
      })
      .status(200)
      .send(token)

  } catch (err) {
    if (err instanceof AuthenticateFailed) {
      return reply.status(404).send({ mensagem: err.message })
    }

    err;
  }

}