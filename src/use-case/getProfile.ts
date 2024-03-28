import { registerUserUseCaseRepository } from "@/repository/registerUser-use-case-repository";
import { User } from "@prisma/client";
import { NotFoundError } from "./erros/not-found-error";

interface getProfileUseCaseRequest {
  id: string
}

interface getProfileUseCaseResponse {
  user: User 
}

export class getProfileUseCase {
  constructor(
    private getUser: registerUserUseCaseRepository
  ) {}

  async execute({
    id
  }:getProfileUseCaseRequest): Promise<getProfileUseCaseResponse> {

    const user = await this.getUser.findById(id)

    if (!user) {
      throw new NotFoundError() 
    }

    return {
      user
    }
  }

}