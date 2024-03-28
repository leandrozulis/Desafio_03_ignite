import { $Enums, Prisma } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import { registerUserUseCaseRepository } from "../registerUser-use-case-repository";

export class PrismaUserUseCase implements registerUserUseCaseRepository {

  async findById(id: string) {
    
    const user = await prisma.user.findFirst({
      where: {
        id
      }
    })

    if (!user) {
      return null
    }

    return user

  }

  async create(data: Prisma.UserCreateInput) {
    
    const user = await prisma.user.create({
      data
    })

    return user

  }

  async findByEmail(email: string) {
    
    const user = await prisma.user.findUnique({
      where: {
        email
      }
    })

    if (!user) {
      return null
    }

    return user

  }

  async includeOrg(id: string, orgId: string) {

    const user = await prisma.user.update({
      where: { 
        id
      },
      data: { 
        org_id: orgId
      },
    });

    return user

  }

}