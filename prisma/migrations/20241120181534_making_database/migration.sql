-- CreateTable
CREATE TABLE `Musica` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `grade` INTEGER NOT NULL,
    `artistId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Artista` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Musica` ADD CONSTRAINT `Musica_artistId_fkey` FOREIGN KEY (`artistId`) REFERENCES `Artista`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
