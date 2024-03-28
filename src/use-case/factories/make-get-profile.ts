import { PrismaUserUseCase } from "@/repository/prisma/prisma-user-use-case";
import { getProfileUseCase } from "../getProfile";

export function MakeGetProfileUser() {

  const prisma = new PrismaUserUseCase()
  const user = new getProfileUseCase(prisma)

  return user

}