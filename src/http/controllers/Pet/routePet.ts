import { FastifyInstance } from "fastify";
import { register } from "./register";

export async function routePet(app: FastifyInstance) {

  app.post('/create/pet/:id', register)

}