/*
  Warnings:

  - Added the required column `uf` to the `Region` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Region" ADD COLUMN     "uf" TEXT NOT NULL;
