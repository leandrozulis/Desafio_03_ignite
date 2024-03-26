import { Classificacao, Prisma } from "@prisma/client";
import { registerPetUseCaseRepository } from "../pet-use-case-repository";
import { prisma } from "@/lib/prisma";

export class PrismaPetUseCase implements registerPetUseCaseRepository {

  async findById(id: string) {
    
    const pet = await prisma.pet.findUnique({
      where: {
        id
      }
    })

    if (!pet) {
      return null
    }

    return pet

  }

  async findManyPet(query: string, classificacao: Classificacao) {

    const pet = await prisma.pet.findMany({
      where: {
        cidade: {
          contains: query
        },
        classificacao: 'DISPONIVEL'
      },
      
    });

    return pet;

  }

  async create(data: Prisma.PetUncheckedCreateInput) {
    
    const pet = await prisma.pet.create({
      data
    })

    return pet

  }

}