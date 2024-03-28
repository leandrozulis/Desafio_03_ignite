import { Prisma, User } from "@prisma/client";

export interface registerUserUseCaseRepository {
  create(data: Prisma.UserCreateInput): Promise<User>
  findByEmail(email: string): Promise<User | null>
  includeOrg(userId: string, orgId: string) : Promise<User>
  findById(id: string): Promise<User | null>
}