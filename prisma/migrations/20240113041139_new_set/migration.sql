/*
  Warnings:

  - You are about to drop the column `valueDex` on the `Snapshot` table. All the data in the column will be lost.
  - You are about to drop the column `valuePool` on the `Snapshot` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Snapshot" DROP COLUMN "valueDex",
DROP COLUMN "valuePool";

-- AlterTable
ALTER TABLE "Strategy" ADD COLUMN     "dexAccounts" TEXT[],
ADD COLUMN     "sharesAddresses" TEXT[];
