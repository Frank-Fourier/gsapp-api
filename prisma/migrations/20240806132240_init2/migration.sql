/*
  Warnings:

  - The `ripartizioneMillesimi` column on the `Tabella` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Tabella" ALTER COLUMN "totaleMillesimi" SET DATA TYPE DOUBLE PRECISION,
DROP COLUMN "ripartizioneMillesimi",
ADD COLUMN     "ripartizioneMillesimi" DOUBLE PRECISION[];
