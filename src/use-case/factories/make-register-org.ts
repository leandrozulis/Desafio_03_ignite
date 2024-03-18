import { PrismaOrgUseCase } from "@/repository/prisma/prisma-org-use-case";
import { registerOrgUseCase } from "../registerOrg";

export function MakeRegisterOrg() {

  const prisma = new PrismaOrgUseCase()
  const org = new registerOrgUseCase(prisma)

  return org

}