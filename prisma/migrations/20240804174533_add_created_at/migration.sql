/*
  Warnings:

  - The primary key for the `Notebook` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `name` on the `Notebook` table. All the data in the column will be lost.
  - Added the required column `content` to the `Notebook` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Notebook` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Notebook" DROP CONSTRAINT "Notebook_pkey",
DROP COLUMN "name",
ADD COLUMN     "content" TEXT NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "deletedAt" TIMESTAMP(6),
ADD COLUMN     "title" TEXT NOT NULL,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Notebook_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Notebook_id_seq";
