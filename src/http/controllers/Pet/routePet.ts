import { FastifyInstance } from "fastify";
import { register } from "./register";
import { listarPets } from "./listarPets";

export async function routePet(app: FastifyInstance) {

  app.post('/create/pet/:id', register)
  app.get('/listar', listarPets)

}