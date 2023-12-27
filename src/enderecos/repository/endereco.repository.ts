/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreateEnderecoDto } from '../dto/create-endereco.dto';
import { UpdateEnderecoDto } from '../dto/update-endereco.dto';
import { EnderecoEntity } from '../entities/endereco.entity';

@Injectable()
export class EnderecoRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(createEnderecoDto: CreateEnderecoDto): Promise<EnderecoEntity> {
    const endereco = await this.prisma.endereco.create({
      data: createEnderecoDto,
    });
    return endereco;
  }

  async findAll() {
    return await this.prisma.endereco.findMany();
  }

  async findOne(id: number) {
    return this.prisma.endereco.findUnique({
      where: {
        id,
      },
    });
  }

  async update(
    id: number,
    updateUsuarioDto: UpdateEnderecoDto,
  ): Promise<EnderecoEntity> {
    return this.prisma.endereco.update({
      where: {
        id,
      },
      data: updateUsuarioDto,
    });
  }

  async remove(id: number): Promise<EnderecoEntity> {
    return await this.prisma.endereco.delete({
      where: {
        id,
      },
    });
  }
}
