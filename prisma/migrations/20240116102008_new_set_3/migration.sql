/*
  Warnings:

  - You are about to drop the column `sharesAddresses` on the `Strategy` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Strategy" DROP COLUMN "sharesAddresses",
ADD COLUMN     "sharesAddress" TEXT;
