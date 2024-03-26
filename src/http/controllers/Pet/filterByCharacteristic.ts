import { NotFoundError } from "@/use-case/erros/not-found-error";
import { MakeFilterPetByCharacteristic } from "@/use-case/factories/make-filter-pet-by-characteristic";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function filterPetByCharacteristic(request: FastifyRequest, reply: FastifyReply) {

  const bodySchemaPet = z.object({
    query: z.string()
  })
  const { query } = bodySchemaPet.parse(request.query)

  try {

    const pet = MakeFilterPetByCharacteristic()

    const pets = await pet.execute({
      query
    })

    return reply.status(200).send(pets)

  } catch (err) {
    if (err instanceof NotFoundError) {
      return reply.status(404).send({ mensagem: err })
    }

    err;
  }

}