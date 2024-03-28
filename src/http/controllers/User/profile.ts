import { MakeGetProfileUser } from "@/use-case/factories/make-get-profile";
import { FastifyReply, FastifyRequest } from "fastify";

export async function profile(request: FastifyRequest, reply: FastifyReply) {

  const profileUser = MakeGetProfileUser()

  const { user } = await profileUser.execute({
    id: request.user.sub
  })

  return reply.status(201).send({
    user: {
      ...user,
      password_hash: undefined
    }
  })

}