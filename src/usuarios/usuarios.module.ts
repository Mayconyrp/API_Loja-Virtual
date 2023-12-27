import { Module } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { UsuariosController } from './usuarios.controller';
import { UsuarioRepository } from 'src/usuarios/repository/usuario.repository';
import { PrismaService } from 'prisma/prisma.service';
import { EnderecosModule } from '../enderecos/enderecos.module';

@Module({
  imports: [EnderecosModule],
  controllers: [UsuariosController],
  providers: [UsuariosService, PrismaService, UsuarioRepository],
})
export class UsuariosModule {}
