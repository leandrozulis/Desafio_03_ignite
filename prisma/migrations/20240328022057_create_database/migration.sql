-- CreateEnum
CREATE TYPE "Classificacao" AS ENUM ('DISPONIVEL', 'RESERVADO');

-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'MEMBER');

-- CreateTable
CREATE TABLE "pets" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "raca" TEXT NOT NULL,
    "tamanho" TEXT NOT NULL,
    "cidade" TEXT NOT NULL,
    "detalhes" TEXT,
    "classificacao" "Classificacao" NOT NULL DEFAULT 'DISPONIVEL',
    "org_id" TEXT NOT NULL,

    CONSTRAINT "pets_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password_hash" TEXT NOT NULL,
    "role" "Role" NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "isOrg" BOOLEAN NOT NULL,
    "org_id" TEXT,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "orgs" (
    "id" TEXT NOT NULL,
    "endereco" TEXT DEFAULT '',
    "cidade" TEXT NOT NULL DEFAULT '',
    "whatsapp" TEXT DEFAULT '',

    CONSTRAINT "orgs_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- AddForeignKey
ALTER TABLE "pets" ADD CONSTRAINT "pets_org_id_fkey" FOREIGN KEY ("org_id") REFERENCES "orgs"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_org_id_fkey" FOREIGN KEY ("org_id") REFERENCES "orgs"("id") ON DELETE SET NULL ON UPDATE CASCADE;
