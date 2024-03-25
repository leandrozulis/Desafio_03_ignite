import { MakeListarManyPets } from "@/use-case/factories/make-listar-many-pets";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function listarPets(request: FastifyRequest, reply: FastifyReply) {

  const bodySchemaPet = z.object({
    query: z.string()
  })
  const { query } = bodySchemaPet.parse(request.query)

  try {

    const pet = MakeListarManyPets()

    const pets = await pet.execute({
      query
    })

    return reply.status(200).send(pets)

  } catch (err) {
    return reply.status(404).send({ mensagem: err })
  }

}