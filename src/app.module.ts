import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuariosModule } from './usuarios/usuarios.module';
import { CategoriasModule } from './categorias/categorias.module';
import { ProdutosModule } from './produtos/produtos.module';
import { EnderecosModule } from './enderecos/enderecos.module';

@Module({
  imports: [UsuariosModule, CategoriasModule, ProdutosModule, EnderecosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
