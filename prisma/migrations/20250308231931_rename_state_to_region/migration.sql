/*
  Warnings:

  - You are about to drop the `CountryStates` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "CountryStates";

-- CreateTable
CREATE TABLE "Region" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Region_pkey" PRIMARY KEY ("id")
);
