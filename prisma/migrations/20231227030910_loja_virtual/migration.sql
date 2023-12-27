/*
  Warnings:

  - You are about to drop the column `endereco_id` on the `usuarios` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `produtos` DROP FOREIGN KEY `produtos_categoria_id_fkey`;

-- DropForeignKey
ALTER TABLE `usuarios` DROP FOREIGN KEY `usuarios_endereco_id_fkey`;

-- AlterTable
ALTER TABLE `usuarios` DROP COLUMN `endereco_id`;
