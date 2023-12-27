import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuariosModule } from './usuarios/usuarios.module';
import { EnderecosModule } from './enderecos/enderecos.module';

@Module({
  imports: [UsuariosModule, EnderecosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
