import { Prisma, Pet, Classificacao } from "@prisma/client";

export interface registerPetUseCaseRepository {
  create(data: Prisma.PetUncheckedCreateInput): Promise<Pet>
  findManyPet(cidade: string, classificacao: Classificacao): Promise<Pet[]>
  findById(id: string): Promise<Pet | null>
  filterByCharacteristic(caracteristica: string): Promise<Pet[] | null>
}