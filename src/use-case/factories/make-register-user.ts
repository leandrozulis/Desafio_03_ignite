import { PrismaUserUseCase } from "@/repository/prisma/prisma-user-use-case";
import { registerUseCase } from "../registerUser";

export function MakeRegisterUser() {

  const prisma = new PrismaUserUseCase()
  const user = new registerUseCase(prisma)

  return user

}