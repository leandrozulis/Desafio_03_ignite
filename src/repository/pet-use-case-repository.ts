import { Prisma, Pet } from "@prisma/client";

export interface registerPetUseCaseRepository {
  create(data: Prisma.PetUncheckedCreateInput): Promise<Pet>
}