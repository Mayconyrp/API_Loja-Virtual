import { Module } from '@nestjs/common';
import { CategoriasService } from './categorias.service';
import { CategoriasController } from './categorias.controller';
import { CategoriasRepository } from './repository/categorias.repository';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  imports: [],
  controllers: [CategoriasController],
  providers: [CategoriasService, PrismaService, CategoriasRepository],
})
export class CategoriasModule {}
