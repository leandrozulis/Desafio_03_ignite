import { registerPetUseCaseRepository } from "@/repository/pet-use-case-repository";
import { NotFoundError } from "./erros/not-found-error";


interface visualizaPetUseCaseRequest {
  id: string
}

export class visualizaPetUseCase {
  constructor(
    private visualizaPet: registerPetUseCaseRepository
  ) {}

  async execute({
    id
  }:visualizaPetUseCaseRequest) {

    const pet = await this.visualizaPet.findById(id)

    if (!pet) {
      throw new NotFoundError()
    }

    return {
      DetalhesPet: pet.detalhes
    }

  }

}