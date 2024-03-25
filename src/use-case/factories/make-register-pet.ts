import { registerPetUseCase } from "../registerPet";
import { PrismaPetUseCase } from "@/repository/prisma/prisma-pet-use-case";

export function MakeRegisterPet() {

  const prisma = new PrismaPetUseCase()
  const pet = new registerPetUseCase(prisma)

  return pet

}