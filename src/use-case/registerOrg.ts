import { Org } from "@prisma/client";
import { AlreadyExistsError } from "./erros/already-exists-error";
import { hash } from "bcryptjs";
import { orgUseCaseRepository } from "@/repository/org-use-case-repository";

interface registerOrgUseCaseRequest {
  endereco: string
  cidade: string
  whatsapp: string
}

interface registerOrgUseCaseResponse {
  org: Org
}

export class registerOrgUseCase {
  constructor(
    private orgRegister: orgUseCaseRepository
  ) {}

  async execute({
    endereco,
    cidade,
    whatsapp
  }:registerOrgUseCaseRequest): Promise<registerOrgUseCaseResponse> {

    const org = await this.orgRegister.create({
      endereco,
      cidade,
      whatsapp
    })

    return {
      org
    }
  }
}