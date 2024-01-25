/*
  Warnings:

  - You are about to drop the `Article` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Article" DROP CONSTRAINT "Article_authorId_fkey";

-- DropTable
DROP TABLE "Article";

-- CreateTable
CREATE TABLE "Strategy" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "initialVPS" DOUBLE PRECISION NOT NULL,
    "initialTime" TIMESTAMP(3) NOT NULL,
    "dexPairs" TEXT[],
    "poolAddresses" TEXT[],
    "assetAddresses" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Strategy_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Snapshot" (
    "id" SERIAL NOT NULL,
    "strategyId" INTEGER NOT NULL,
    "VPS" DOUBLE PRECISION NOT NULL,
    "APY" DOUBLE PRECISION NOT NULL,
    "NAV" DOUBLE PRECISION NOT NULL,
    "valuePool" DOUBLE PRECISION NOT NULL,
    "valueDex" DOUBLE PRECISION NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Snapshot_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Strategy_title_key" ON "Strategy"("title");

-- CreateIndex
CREATE UNIQUE INDEX "Snapshot_strategyId_timestamp_key" ON "Snapshot"("strategyId", "timestamp");

-- AddForeignKey
ALTER TABLE "Snapshot" ADD CONSTRAINT "Snapshot_strategyId_fkey" FOREIGN KEY ("strategyId") REFERENCES "Strategy"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
