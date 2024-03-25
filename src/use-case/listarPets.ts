import { Classificacao, Pet } from "@prisma/client";
import { registerPetUseCaseRepository } from "@/repository/pet-use-case-repository";

interface listarPetUseCaseRequest {
  query: string,
  classificacao: Classificacao
}

interface listarPetUseCaseResponse {
  pet: Pet[]
}

export class listarPetUseCase {
  constructor(
    private listarPet: registerPetUseCaseRepository
  ) {}

  async execute({
    query, classificacao
  }:listarPetUseCaseRequest): Promise<listarPetUseCaseResponse> {

    const pet = await this.listarPet.findManyPet(query, classificacao)

    return {
      pet
    }

  }

}