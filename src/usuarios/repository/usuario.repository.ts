import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { CreateUsuarioDto } from 'src/usuarios/dto/create-usuario.dto';
import { UpdateUsuarioDto } from 'src/usuarios/dto/update-usuario.dto';
import { UsuarioEntity } from '../entities/usuario.entity';
import { Usuario } from '@prisma/client';
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

  async findByEmail(email: string): Promise<UsuarioEntity | null> {
    return this.prisma.usuario.findUnique({ where: { email } });
  }
  async findAll(): Promise<Usuario[]> {
    return await this.prisma.usuario.findMany({
      include: {
        enderecos: true,
      },
    });
  }
  /*async findByEmail(email: string): Promise<Usuario> {
    return this.prisma.usuario.findUnique({
      where: {
        email,
      },
      include: {
        enderecos: true,
      },
    });
  }
*/
  /*async findOne(id: number): Promise<Usuario> {
    return this.prisma.usuario.findUnique({
      where: {
        id,
      },
      include: {
        enderecos: true,
      },
    });
  }
*/
  async update(
    id: number,
    updateUsuarioDto: UpdateUsuarioDto,
  ): Promise<UsuarioEntity> {
    const { enderecos, ...usuarioData } = updateUsuarioDto;

    // Transforme o array de endereços para o formato que o Prisma espera
    const enderecosUpdate = enderecos?.map((endereco) => ({
      where: { id: endereco.id },
      data: endereco,
    }));

    const data = {
      ...usuarioData,
      enderecos: {
        update: enderecosUpdate,
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

  async remove(id: number): Promise<UsuarioEntity> {
    const usuario = await this.prisma.usuario.findUnique({
      where: {
        id,
      },
      include: {
        enderecos: true,
      },
    });

    if (!usuario) {
      throw new NotFoundException(`Usuário com ID ${id} não encontrado.`);
    }

    // Remova o usuário e seus endereços
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
