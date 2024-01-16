import { EnderecoEntity } from './../entities/endereco.entity';
import { UpdateEnderecoDto } from './../dto/update-endereco.dto';
import { CreateEnderecoDto } from './../dto/create-endereco.dto';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { NotFoundError } from 'src/common/errors/types/NotFoundError';

@Injectable()
export class EnderecoRepository {
  constructor(private readonly prisma: PrismaService) {}
  async create(createEnderecoDto: CreateEnderecoDto): Promise<EnderecoEntity> {
    const { email } = createEnderecoDto;
    const usuario = await this.prisma.usuario.findUnique({
      where: {
        email,
      },
    });

    if (!usuario) {
      throw new NotFoundError(`Usuário com e-mail ${email} não encontrado.`);
    }

    const data: Prisma.EnderecoCreateInput = {
      ...createEnderecoDto,
      usuario: {
        connect: {
          id: usuario.id,
        },
      },
    };

    return this.prisma.endereco.create({
      data: data,
    });
  }
  async findAll() {
    return this.prisma.endereco.findMany({
      include: {
        usuario: {
          select: {
            nome: true,
          },
        },
      },
    });
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
    updateEnderecoDto: UpdateEnderecoDto,
  ): Promise<EnderecoEntity> {
    return this.prisma.endereco.update({
      where: {
        id,
      },
      data: updateEnderecoDto,
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
