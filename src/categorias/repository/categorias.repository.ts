// categorias.repository.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { Categoria } from '@prisma/client';
import { CreateCategoriaDto } from '../dto/create-categoria.dto';
import { UpdateCategoriaDto } from '../dto/update-categoria.dto';

@Injectable()
export class CategoriasRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(createCategoriaDto: CreateCategoriaDto): Promise<Categoria> {
    const { produtos, ...categoriaData } = createCategoriaDto;

    const data = {
      ...categoriaData,
      produtos: {
        create: produtos,
      },
    };

    return this.prisma.categoria.create({
      data: data,
      include: {
        produtos: true,
      },
    });
  }

  async update(
    id: number,
    updateCategoriaDto: UpdateCategoriaDto,
  ): Promise<Categoria> {
    const { produtos, ...categoriaData } = updateCategoriaDto;

    const produtosUpdate = produtos?.map((produto) => ({
      where: { id: produto.codigo },
      data: produto,
    }));

    const data = {
      ...categoriaData,
      produtos: {
        update: produtosUpdate,
      },
    };

    return this.prisma.categoria.update({
      where: {
        id: id,
      },
      data: data,
      include: {
        produtos: true,
      },
    });
  }

  async remove(id: number): Promise<Categoria> {
    const categoria = await this.prisma.categoria.findUnique({
      where: {
        id,
      },
      include: {
        produtos: true,
      },
    });

    if (!categoria) {
      throw new NotFoundException(`Categoria with id ${id} not found`);
    }

    await this.prisma.produto.deleteMany({
      where: {
        categoria_id: id,
      },
    });

    await this.prisma.categoria.delete({
      where: {
        id,
      },
      include: {
        produtos: true,
      },
    });

    return categoria;
  }

  async findAll(): Promise<Categoria[]> {
    return this.prisma.categoria.findMany({});
  }
  async buscarCategoriaProduto(): Promise<Categoria[]> {
    return this.prisma.categoria.findMany({
      include: {
        produtos: true,
      },
    });
  }

  async findOne(id: number): Promise<Categoria> {
    const categoria = await this.prisma.categoria.findUnique({
      where: {
        id,
      },
      // include: {
      // produtos: true,
      //},
    });

    if (!categoria) {
      throw new NotFoundException(`Categoria with id ${id} not found`);
    }

    return categoria;
  }
}
