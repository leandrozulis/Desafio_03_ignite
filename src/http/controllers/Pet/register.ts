import { MakeRegisterPet } from "@/use-case/factories/make-register-pet";
import { FastifyReply, FastifyRequest } from "fastify";
import { ZodError, z } from "zod";

export async function register(request: FastifyRequest, reply: FastifyReply) {

  const bodySchemaPet = z.object({
    nome: z.string(),
    raca: z.string(),
    tamanho: z.string(),
    cidade: z.string(),
    detalhes: z.string()
  })

  const querySchemaPet = z.object({
    id: z.string()
  })

  const { nome, raca, tamanho, cidade, detalhes } = bodySchemaPet.parse(request.body)
  const { id } = querySchemaPet.parse(request.params)

  try {

    const pet = MakeRegisterPet()

    await pet.execute({
      nome,
      raca,
      tamanho, 
      cidade,
      detalhes,
      id
    })

    return reply.status(201).send()

  } catch (err) {
    return reply.status(404).send({ mensagem: err })
  }

}