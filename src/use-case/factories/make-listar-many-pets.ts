import { listarPetUseCase } from "../listarPets";
import { PrismaPetUseCase } from "@/repository/prisma/prisma-pet-use-case";

export function MakeListarManyPets() {

  const prisma = new PrismaPetUseCase()
  const pet = new listarPetUseCase(prisma)

  return pet

}