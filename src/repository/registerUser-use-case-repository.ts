import { Prisma, User } from "@prisma/client";

export interface registerUserUseCaseRepository {
  create(data: Prisma.UserCreateInput): Promise<User>
  findByEmail(email: string): Promise<User | null>
  validadeIsOrg(org: boolean): Promise<User>
  includeOrg(orgId: string) : Promise<User>
}