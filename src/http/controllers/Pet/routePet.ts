import { FastifyInstance } from "fastify";
import { register } from "./register";
import { listarPets } from "./listarPets";
import { viewDetalhesPet } from "./viewDetalhes";
import { filterPetByCharacteristic } from "./filterByCharacteristic";

export async function routePet(app: FastifyInstance) {

  app.post('/create/pet/:id', register)
  
  app.get('/listar', listarPets)
  app.get('/visualizar/:id', viewDetalhesPet)
  app.get('/caracteristica', filterPetByCharacteristic)

}