import { Pet } from "@prisma/client";
import { registerPetUseCaseRepository } from "@/repository/pet-use-case-repository";

interface registerPetUseCaseRequest {
  nome: string
  raca: string
  tamanho: string
  cidade: string
  detalhes: string
  id: string
}

interface registerPetUseCaseResponse {
  pet: Pet
}

export class registerPetUseCase {
  constructor(
    private registerPet: registerPetUseCaseRepository
  ) {}

  async execute({
    nome,
    raca,
    tamanho,
    cidade,
    detalhes,
    id
  }:registerPetUseCaseRequest): Promise<registerPetUseCaseResponse> {

    const pet = await this.registerPet.create({
      nome,
      raca,
      tamanho,
      cidade,
      detalhes,
      org_id: id
    })

    return {
      pet
    }

  }

}