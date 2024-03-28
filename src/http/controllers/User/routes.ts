import { FastifyInstance } from "fastify";
import { register } from "./register";
import { authenticate } from "./authenticate";
import { profile } from "./profile";
import { verifyJWT } from "@/http/middlewares/verify-jwt";

export async function routeUser(app: FastifyInstance) {
  app.post('/create', register)
  app.post('/authenticate', authenticate)

  app.get('/me', { onRequest: [verifyJWT] }, profile)
}