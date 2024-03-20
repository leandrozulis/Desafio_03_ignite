import { Prisma } from "@prisma/client";
import { orgUseCaseRepository } from "../org-use-case-repository";
import { prisma } from "@/lib/prisma";

export class PrismaOrgUseCase implements orgUseCaseRepository {

  async create(data: Prisma.OrgCreateInput): Promise<{ id: string; endereco: string | null; cidade: string | null; whatsapp: string | null; }> {
    
    const org = await prisma.org.create({
      data
    })

    return org

  }

}