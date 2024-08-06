/*
  Warnings:

  - You are about to drop the column `gestioneMovimentoId` on the `Movimento` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Movimento" DROP CONSTRAINT "Movimento_gestioneMovimentoId_fkey";

-- AlterTable
ALTER TABLE "Movimento" DROP COLUMN "gestioneMovimentoId",
ADD COLUMN     "gestioneId" INTEGER;

-- AddForeignKey
ALTER TABLE "Movimento" ADD CONSTRAINT "Movimento_gestioneId_fkey" FOREIGN KEY ("gestioneId") REFERENCES "Gestione"("id") ON DELETE SET NULL ON UPDATE CASCADE;
