import { Module } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { UsuariosController } from './usuarios.controller';
import { UsuarioRepository } from 'src/usuarios/repository/usuario.repository';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  imports: [],
  controllers: [UsuariosController],
  providers: [UsuariosService, PrismaService, UsuarioRepository],
  exports: [UsuariosService],
})
export class UsuariosModule {}
