import { Pet } from "@prisma/client";
import { registerPetUseCaseRepository } from "@/repository/pet-use-case-repository";
import { NotFoundError } from "./erros/not-found-error";

interface filterPetByCharacteristicUseCaseRequest {
  query: string
}

interface filterPetByCharacteristicUseCaseResponse {
  pet: Pet[]
}

export class filterPetByCharacteristicUseCase {
  constructor(
    private filterPetByCharacteristic: registerPetUseCaseRepository
  ) {}

  async execute({
    query
  }:filterPetByCharacteristicUseCaseRequest): Promise<filterPetByCharacteristicUseCaseResponse> {

    const pet = await this.filterPetByCharacteristic.filterByCharacteristic(query)

    if (!pet) {
      throw new NotFoundError()
    }

    return {
      pet
    }

  }

}