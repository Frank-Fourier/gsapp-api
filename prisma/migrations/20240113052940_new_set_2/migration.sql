/*
  Warnings:

  - You are about to drop the column `assetAddresses` on the `Strategy` table. All the data in the column will be lost.
  - You are about to drop the column `dexPairs` on the `Strategy` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Strategy" DROP COLUMN "assetAddresses",
DROP COLUMN "dexPairs",
ADD COLUMN     "cexAccounts" TEXT[];
