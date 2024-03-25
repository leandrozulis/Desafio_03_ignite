import { FastifyInstance } from "fastify";
import { register } from "./register";
import { authenticate } from "./authenticate";

export async function routeUser(app: FastifyInstance) {
  app.post('/create', register)
  app.post('/authenticate', authenticate)
}