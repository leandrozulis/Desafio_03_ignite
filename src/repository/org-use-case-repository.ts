import { Org, Prisma } from "@prisma/client";

export interface orgUseCaseRepository {
  create(data: Prisma.OrgCreateInput): Promise<Org>
}