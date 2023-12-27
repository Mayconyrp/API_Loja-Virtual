import { Module } from '@nestjs/common';
import { EnderecosService } from './enderecos.service';
import { EnderecosController } from './enderecos.controller';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  controllers: [EnderecosController],
  providers: [EnderecosService, PrismaService],
})
export class EnderecosModule {}
