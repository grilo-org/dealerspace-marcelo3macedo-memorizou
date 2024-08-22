/*
  Warnings:

  - You are about to drop the `UserNotebooks` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `userId` to the `Notebook` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "UserNotebooks" DROP CONSTRAINT "UserNotebooks_notebookId_fkey";

-- DropForeignKey
ALTER TABLE "UserNotebooks" DROP CONSTRAINT "UserNotebooks_userId_fkey";

-- AlterTable
ALTER TABLE "Notebook" ADD COLUMN     "userId" TEXT NOT NULL;

-- DropTable
DROP TABLE "UserNotebooks";

-- AddForeignKey
ALTER TABLE "Notebook" ADD CONSTRAINT "Notebook_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
