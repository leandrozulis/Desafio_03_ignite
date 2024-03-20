import { FastifyInstance } from "fastify";
import { register } from "./register";

export async function appRoute(app: FastifyInstance) {
  app.post('/create', register)
}