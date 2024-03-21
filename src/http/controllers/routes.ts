import { FastifyInstance } from "fastify";
import { register } from "./register";
import { authenticate } from "./authenticate";

export async function appRoute(app: FastifyInstance) {
  app.post('/create', register)
  app.post('/authenticate', authenticate)
}