import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { CreateUsuarioDto } from 'src/usuarios/dto/create-usuario.dto';
import { UpdateUsuarioDto } from 'src/usuarios/dto/update-usuario.dto';
import { UsuarioEntity } from '../entities/usuario.entity';
import { Prisma, Usuario } from '@prisma/client';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsuarioRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(createUsuarioDto: CreateUsuarioDto): Promise<Usuario> {
    const { enderecos, ...usuarioData } = createUsuarioDto;

    const usuario = await this.prisma.usuario.create({
      data: {
        ...usuarioData,
        senha: await bcrypt.hash(createUsuarioDto.senha, 10),
        enderecos: {
          create: enderecos.map((endereco) => ({
            cidade: endereco.cidade,
            rua: endereco.rua,
            cep: endereco.cep,
          })),
        },
      },
      include: {
        enderecos: true,
      },
    });

    return usuario;
  }

  async update(
    id: number,
    updateUsuarioDto: UpdateUsuarioDto,
  ): Promise<UsuarioEntity> {
    const { enderecos, ...usuarioData } = updateUsuarioDto;

    const usuario = await this.prisma.usuario.findUnique({
      where: {
        id,
      },
      include: {
        enderecos: true,
      },
    });

    if (!usuario) {
      throw new NotFoundException('Usuário não encontrado');
    }

    const enderecoUpdates = enderecos?.map((endereco) => ({
      where: { id: usuario.id },
      data: endereco,
    }));

    const data: Prisma.UsuarioUpdateInput = {
      ...usuarioData,
      enderecos: {
        update: enderecoUpdates,
      },
    };

    return this.prisma.usuario.update({
      where: {
        id,
      },
      data,
      include: {
        enderecos: true,
      },
    });
  }

  async findOne(id: number): Promise<UsuarioEntity | null> {
    return this.prisma.usuario.findUnique({
      where: {
        id: id,
      },
      include: {
        enderecos: true,
      },
    });
  }

  async findByEmail(email: string): Promise<UsuarioEntity | null> {
    return this.prisma.usuario.findUnique({ where: { email } });
  }

  async findAll(): Promise<Usuario[]> {
    return this.prisma.usuario.findMany({
      include: {
        enderecos: true,
      },
    });
  }

  async remove(id: number): Promise<UsuarioEntity | null> {
    const usuario = await this.prisma.usuario.findUnique({
      where: {
        id,
      },
      include: {
        enderecos: true,
      },
    });

    if (!usuario) {
      return null;
    }

    await this.prisma.usuario.delete({
      where: {
        id,
      },
      include: {
        enderecos: true,
      },
    });

    return usuario;
  }
}
