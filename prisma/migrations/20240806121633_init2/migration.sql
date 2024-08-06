/*
  Warnings:

  - You are about to drop the column `transazioneId` on the `Movimento` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Movimento" DROP CONSTRAINT "Movimento_transazioneId_fkey";

-- AlterTable
ALTER TABLE "Movimento" DROP COLUMN "transazioneId";

-- AlterTable
ALTER TABLE "Transazione" ADD COLUMN     "movimentoId" INTEGER;

-- AddForeignKey
ALTER TABLE "Transazione" ADD CONSTRAINT "Transazione_movimentoId_fkey" FOREIGN KEY ("movimentoId") REFERENCES "Movimento"("id") ON DELETE SET NULL ON UPDATE CASCADE;
