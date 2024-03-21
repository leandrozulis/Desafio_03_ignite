import { PrismaUserUseCase } from "@/repository/prisma/prisma-user-use-case";
import { authenticateUseCase } from "../authenticate";

export function MakeAuthenticate() {

  const prisma = new PrismaUserUseCase()
  const user = new authenticateUseCase(prisma)

  return user

}