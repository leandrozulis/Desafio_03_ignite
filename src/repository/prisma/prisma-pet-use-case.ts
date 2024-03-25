import { Prisma } from "@prisma/client";
import { registerPetUseCaseRepository } from "../pet-use-case-repository";
import { prisma } from "@/lib/prisma";

export class PrismaPetUseCase implements registerPetUseCaseRepository {
  async create(data: Prisma.PetUncheckedCreateInput) {
    
    const pet = await prisma.pet.create({
      data
    })

    return pet

  }

}