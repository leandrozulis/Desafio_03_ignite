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

    await rep.execute({
      email,
      password
    })

    return reply.status(200).send('Login Authenticate!')

  } catch (err) {
    if (err instanceof AuthenticateFailed) {
      return reply.status(404).send({ mensagem: err.message })
    }

    err;
  }

}