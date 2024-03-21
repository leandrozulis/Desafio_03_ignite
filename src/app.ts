import fastify from "fastify";
import { appRoute } from "./http/controllers/routes";
import { ZodError } from "zod";
import { env } from "./env";

export const app = fastify()

app.register(appRoute)

app.setErrorHandler((error, _, reply) => {

  if (error instanceof ZodError) {
   return reply
   .status(404)
   .send({ message: 'Validation Error', issues: error.format() }) 
  }

  if (env.NODE_ENV !== 'prod') {
    console.error(error)
  }

  return reply.status(500).send({ message: 'Internal Server Error.' })

})