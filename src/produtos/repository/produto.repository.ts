import { ProdutoEntity } from './../entities/produto.entity';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { CreateProdutoDto } from '../dto/create-produto.dto';
import { UpdateProdutoDto } from '../dto/update-produto.dto';
import { Prisma } from '@prisma/client';
import { NotFoundError } from 'src/common/errors/types/NotFoundError';

@Injectable()
export class ProdutoRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(createProdutoDto: CreateProdutoDto): Promise<ProdutoEntity> {
    const { categoria_id } = createProdutoDto;
    delete createProdutoDto.categoria_id;

    const categoria = await this.prisma.categoria.findUnique({
      where: {
        id: categoria_id,
      },
    });

    if (!categoria) {
      throw new NotFoundError(
        `Categoria com id ${categoria_id} não encontrada.`,
      );
    }

    const data: Prisma.ProdutoCreateInput = {
      ...createProdutoDto,
      categoria: {
        connect: {
          id: categoria_id,
        },
      },
    };

    return this.prisma.produto.create({
      data: data,
    });
  }

  async findAll(): Promise<ProdutoEntity[]> {
    return await this.prisma.produto.findMany({
      include: {
        categoria: {
          select: {
            nome_categoria: true,
          },
        },
      },
    });
  }

  async findOne(id: number) {
    return this.prisma.produto.findUnique({
      where: {
        id,
      },
    });
  }

  async update(
    id: number,
    updateProdutoDto: UpdateProdutoDto,
  ): Promise<ProdutoEntity> {
    return this.prisma.produto.update({
      where: {
        id,
      },
      data: updateProdutoDto,
    });
  }

  async remove(id: number): Promise<ProdutoEntity> {
    return await this.prisma.produto.delete({
      where: {
        id,
      },
    });
  }
}
