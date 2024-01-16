import { Module } from '@nestjs/common';
import { EnderecosService } from './enderecos.service';
import { EnderecosController } from './enderecos.controller';
import { EnderecoRepository } from './repository/endereco.repository';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  imports: [],
  controllers: [EnderecosController],
  providers: [EnderecosService, PrismaService, EnderecoRepository],
})
export class EnderecosModule {}
