/*
  Warnings:

  - Made the column `cidade` on table `orgs` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "orgs" ALTER COLUMN "cidade" SET NOT NULL;
