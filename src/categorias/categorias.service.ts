// categorias.service.ts
import { Injectable } from '@nestjs/common';
import { CategoriasRepository } from './repository/categorias.repository';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';
import { Categoria } from '@prisma/client';

@Injectable()
export class CategoriasService {
  constructor(private readonly categoriasRepository: CategoriasRepository) {}

  async create(createCategoriaDto: CreateCategoriaDto): Promise<Categoria> {
    return this.categoriasRepository.create(createCategoriaDto);
  }

  async findAll(): Promise<Categoria[]> {
    return this.categoriasRepository.findAll();
  }

  async findOne(id: number): Promise<Categoria> {
    return this.categoriasRepository.findOne(id);
  }

  async update(
    id: number,
    updateCategoriaDto: UpdateCategoriaDto,
  ): Promise<Categoria> {
    return this.categoriasRepository.update(id, updateCategoriaDto);
  }
}
