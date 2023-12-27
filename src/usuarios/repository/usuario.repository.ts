import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreateUsuarioDto } from 'src/usuarios/dto/create-usuario.dto';
import { UpdateUsuarioDto } from 'src/usuarios/dto/update-usuario.dto';
import { UsuarioEntity } from 'src/usuarios/entities/usuario.entity';

@Injectable()
export class UsuarioRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(createUsuarioDto: CreateUsuarioDto): Promise<UsuarioEntity> {
    const usuario = await this.prisma.usuario.create({
      data: createUsuarioDto,
    });
    return usuario;
  }

  async findAll() {
    return await this.prisma.usuario.findMany();
  }

  async findOne(id: number) {
    return this.prisma.usuario.findUnique({
      where: {
        id,
      },
    });
  }

  async update(
    id: number,
    updateUsuarioDto: UpdateUsuarioDto,
  ): Promise<UsuarioEntity> {
    return this.prisma.usuario.update({
      where: {
        id,
      },
      data: updateUsuarioDto,
    });
  }

  async remove(id: number): Promise<UsuarioEntity> {
    return await this.prisma.usuario.delete({
      where: {
        id,
      },
    });
  }
}
