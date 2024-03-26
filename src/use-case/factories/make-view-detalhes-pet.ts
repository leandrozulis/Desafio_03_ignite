import { PrismaPetUseCase } from "@/repository/prisma/prisma-pet-use-case";
import { visualizaPetUseCase } from "../viewDetalhes";

export function MakeViewDetalhesPet() {

  const prisma = new PrismaPetUseCase()
  const pet = new visualizaPetUseCase(prisma)

  return pet

}