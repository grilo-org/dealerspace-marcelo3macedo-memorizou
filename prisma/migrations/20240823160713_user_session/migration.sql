-- CreateTable
CREATE TABLE `UserSession` (
    `id` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `notebookId` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `deletedAt` TIMESTAMP(6) NULL,

    INDEX `UserSession_userId_idx`(`userId`),
    INDEX `UserSession_notebookId_idx`(`notebookId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `UserSessionCard` (
    `id` VARCHAR(191) NOT NULL,
    `sessionId` VARCHAR(191) NOT NULL,
    `cardId` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `deletedAt` TIMESTAMP(6) NULL,

    INDEX `UserSessionCard_sessionId_idx`(`sessionId`),
    INDEX `UserSessionCard_cardId_idx`(`cardId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `UserSession` ADD CONSTRAINT `UserSession_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UserSession` ADD CONSTRAINT `UserSession_notebookId_fkey` FOREIGN KEY (`notebookId`) REFERENCES `Notebook`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UserSessionCard` ADD CONSTRAINT `UserSessionCard_sessionId_fkey` FOREIGN KEY (`sessionId`) REFERENCES `UserSession`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UserSessionCard` ADD CONSTRAINT `UserSessionCard_cardId_fkey` FOREIGN KEY (`cardId`) REFERENCES `Card`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
