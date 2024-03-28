import { FastifyInstance } from "fastify";
import { register } from "./register";
import { listarPets } from "./listarPets";
import { viewDetalhesPet } from "./viewDetalhes";
import { filterPetByCharacteristic } from "./filterByCharacteristic";
import { verifyUserRole } from "@/http/middlewares/verify-user-role";
import { verifyJWT } from "@/http/middlewares/verify-jwt";

export async function routePet(app: FastifyInstance) {
  app.addHook('onRequest', verifyJWT)

  app.post('/create/pet/:id', { onRequest: [verifyUserRole('ADMIN')] } ,register)
  
  app.get('/listar', listarPets)
  app.get('/visualizar/:id', viewDetalhesPet)
  app.get('/caracteristica', filterPetByCharacteristic)

}