import { Pet } from "@prisma/client";
import { registerPetUseCaseRepository } from "@/repository/pet-use-case-repository";
import { NotFoundError } from "./erros/Not-found-error";

interface visualizaPetUseCaseRequest {
  id: string
  detalhes: string
}

interface visualizaPetUseCaseResponse {
  detalhes: string | null
}

export class visualizaPetUseCase {
  constructor(
    private visualizaPet: registerPetUseCaseRepository
  ) {}

  async execute({
    id
  }:visualizaPetUseCaseRequest): Promise<visualizaPetUseCaseResponse> {

    const pet = await this.visualizaPet.findById(id)

    if (!pet) {
      throw new NotFoundError()
    }

    return { pet.detalhes }

  }

}