-- AlterTable
ALTER TABLE `UserSessionCard` ADD COLUMN `answerAt` TIMESTAMP(6) NULL,
    ADD COLUMN `difficultyId` VARCHAR(191) NULL;

-- CreateIndex
CREATE INDEX `UserSessionCard_difficultyId_idx` ON `UserSessionCard`(`difficultyId`);

-- AddForeignKey
ALTER TABLE `UserSessionCard` ADD CONSTRAINT `UserSessionCard_difficultyId_fkey` FOREIGN KEY (`difficultyId`) REFERENCES `Difficulty`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
