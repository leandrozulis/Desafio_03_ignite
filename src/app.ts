import fastify from "fastify";
import { routeUser } from "./http/controllers/User/routes";
import { ZodError } from "zod";
import { env } from "./env";
import { routePet } from "./http/controllers/Pet/routePet";
import fastifyJwt from "@fastify/jwt";
import fasitfyCookie from "@fastify/cookie"

export const app = fastify()

app.register(fastifyJwt, {
  secret: env.JWT_SECRET,
  cookie: {
    cookieName: 'refreshToken',
    signed: false
  },
  sign: {
    expiresIn: '10m'
  }
})

app.register(fasitfyCookie)

app.register(routeUser)
app.register(routePet)

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