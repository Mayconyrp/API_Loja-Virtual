import { Module } from '@nestjs/common';
import { ProdutosService } from './produtos.service';
import { ProdutosController } from './produtos.controller';
import { PrismaService } from 'prisma/prisma.service';
import { ProdutoRepository } from './repository/produto.repository';

@Module({
  imports: [],
  controllers: [ProdutosController],
  providers: [ProdutosService, PrismaService, ProdutoRepository],
})
export class ProdutosModule {}
