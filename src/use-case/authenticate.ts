import { User } from "@prisma/client";
import { registerUserUseCaseRepository } from "@/repository/registerUser-use-case-repository";
import { AuthenticateFailed } from "./erros/authenticate-failed";
import { compare } from "bcryptjs";

interface authenticateUseCaseRequest {
  email: string
  password: string
}

interface authenticateUseCaseResponse {
  user: User
}

export class authenticateUseCase {
  constructor(
    private authenticateUser: registerUserUseCaseRepository
  ) {}

  async execute({
    email,
    password
  }:authenticateUseCaseRequest): Promise<authenticateUseCaseResponse> {

    const user = await this.authenticateUser.findByEmail(email)

    if (!user) {
      throw new AuthenticateFailed()
    }

    const DoesPasswordMatched = await compare(password, user.password_hash)

    if (!DoesPasswordMatched) {
      throw new AuthenticateFailed()
    }

    return {
      user
    }
  }
}