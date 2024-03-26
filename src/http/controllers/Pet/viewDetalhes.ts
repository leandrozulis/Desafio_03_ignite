import { NotFoundError } from "@/use-case/erros/not-found-error";
import { MakeViewDetalhesPet } from "@/use-case/factories/make-view-detalhes-pet";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function viewDetalhesPet(request: FastifyRequest, reply: FastifyReply) {

  const bodySchemaPet = z.object({
    id: z.string().uuid()
  })
  const { id } = bodySchemaPet.parse(request.params)

  try {

    const pet = MakeViewDetalhesPet()

    const pets = await pet.execute({
      id
    })

    return reply.status(200).send(pets)

  } catch (err) {
    if (err instanceof NotFoundError) {
      return reply.status(404).send({ mensagem: err })
    }

    err;

  }

}