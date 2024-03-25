import { AlreadyExistsError } from "@/use-case/erros/already-exists-error";
import { MakeRegisterUser } from "@/use-case/factories/make-register-user";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function register(request: FastifyRequest, reply: FastifyReply) {

  const bodySchema = z.object({
    nome: z.string(),
    email: z.string().email(),
    password: z.string().min(6),
    isOrg: z.boolean(),

    endereco: z.string().default(''),
    cidade: z.string().default(''),
    whatsapp: z.string().default('')
  })

  const { nome, email, password, isOrg, endereco, cidade, whatsapp } = bodySchema.parse(request.body)

  try {

    const rep = MakeRegisterUser()

    await rep.execute({
      nome,
      email,
      password,
      isOrg,
      endereco,
      cidade,
      whatsapp
    })

    return reply.status(201).send()

  } catch (err) {
    if (err instanceof AlreadyExistsError) {
      return reply.status(404).send({ mensagem: err.message })
    }

    err;
  }

}