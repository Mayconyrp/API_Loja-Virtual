// categorias.repository.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { CreateCategoriaDto } from '../dto/create-categoria.dto';
import { UpdateCategoriaDto } from '../dto/update-categoria.dto';
import { Categoria } from '@prisma/client';

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

    // Transforme o array de produtos para o formato que o Prisma espera
    const produtosUpdate = produtos?.map((produto) => ({
      where: { id: produto.id }, // ou outro campo único
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

  async findAll(): Promise<Categoria[]> {
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
      include: {
        produtos: true,
      },
    });

    if (!categoria) {
      throw new NotFoundException(`Categoria with id ${id} not found`);
    }

    return categoria;
  }
}
