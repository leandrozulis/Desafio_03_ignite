import { registerUserUseCaseRepository } from "@/repository/registerUser-use-case-repository";
import { Org, Role, User } from "@prisma/client";
import { AlreadyExistsError } from "./erros/already-exists-error";
import { hash } from "bcryptjs";
import { MakeRegisterOrg } from "./factories/make-register-org";

interface registerUseCaseRequest {
  nome: string
  email: string
  password: string
  role: Role
  isOrg: boolean

  endereco: string
  cidade: string
  whatsapp: string
}

interface registerUseCaseResponse {
  user: User 
}

interface registerOrgRequest {
  endereco: string
  cidade: string
  whatsapp: string
}

interface registerOrgResponse {
  org: Org
}

export class registerUseCase {
  constructor(
    private registerUser: registerUserUseCaseRepository
  ) {}

  async execute({
    nome,
    email,
    password,
    isOrg,
    role,

    endereco, cidade, whatsapp
  }:registerUseCaseRequest): Promise<registerUseCaseResponse> {

    const doesEmailExists = await this.registerUser.findByEmail(email)

    if (doesEmailExists) {
      throw new AlreadyExistsError()
    }

    const password_hash = await hash(password, 6)

    let user = await this.registerUser.create({
      nome,
      email,
      password_hash,
      isOrg,
      role
    })

    if (user.isOrg) {

      let org: registerOrgResponse = await this.createOrg({endereco, cidade, whatsapp})

      let orgId: string = org.org.id

      user = await this.registerUser.includeOrg(user.id, orgId)
      
    }

    return {
      user
    }
  }

  async createOrg({
    endereco,
    cidade,
    whatsapp
  }: registerOrgRequest): Promise<registerOrgResponse> {

    const orgSchema = MakeRegisterOrg()

    const org = orgSchema.execute({
      endereco,
      cidade,
      whatsapp
    })

    return org

  }

}