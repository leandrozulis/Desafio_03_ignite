import { Prisma } from "@prisma/client";
import { orgUseCaseRepository } from "../org-use-case-repository";

export class PrismaOrgUseCase implements orgUseCaseRepository {
  create(data: Prisma.OrgCreateInput): Promise<{ id: string; endereco: string | null; cidade: string | null; whatsapp: string | null; }> {
    throw new Error("Method not implemented.");
  }
  validadeIsOrg(orgId: string): Promise<{ id: string; endereco: string | null; cidade: string | null; whatsapp: string | null; } | null> {
    throw new Error("Method not implemented.");
  }

}