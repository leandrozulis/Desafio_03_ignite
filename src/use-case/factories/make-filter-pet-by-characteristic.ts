import { filterPetByCharacteristicUseCase } from "../filterByCharacteristic";
import { PrismaPetUseCase } from "@/repository/prisma/prisma-pet-use-case";

export function MakeFilterPetByCharacteristic() {

  const prisma = new PrismaPetUseCase()
  const pet = new filterPetByCharacteristicUseCase(prisma)

  return pet

}