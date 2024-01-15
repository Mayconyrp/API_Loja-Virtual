-- DropForeignKey
ALTER TABLE `produtos` DROP FOREIGN KEY `produtos_categoria_id_fkey`;

-- AlterTable
ALTER TABLE `produtos` MODIFY `categoria_id` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `produtos` ADD CONSTRAINT `produtos_categoria_id_fkey` FOREIGN KEY (`categoria_id`) REFERENCES `categorias`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
