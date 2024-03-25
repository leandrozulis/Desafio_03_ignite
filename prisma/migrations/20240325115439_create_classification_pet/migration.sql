-- CreateEnum
CREATE TYPE "Classificacao" AS ENUM ('DISPONIVEL', 'RESERVADO');

-- AlterTable
ALTER TABLE "pets" ADD COLUMN     "classificacao" "Classificacao" NOT NULL DEFAULT 'DISPONIVEL';
