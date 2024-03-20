import fastify from "fastify";
import { appRoute } from "./http/controllers/routes";

export const app = fastify()

app.register(appRoute)