import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
//import { HttpExcpetionFilter } from './common/filters/http-excpetion/http-excpetion.filter';
import { UnauthorizedInterceptor } from './common/errors/interceptors/unauthorized.interceptor';
import { NotFoundInterceptor } from './common/errors/interceptors/notfound.interceptor';
import { DatabaseInterceptor } from './common/errors/interceptors/database.interceptor';
import { ConflictInterceptor } from './common/errors/interceptors/conflict.interceptor';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('E-Commerce')
    .setDescription(
      'Bem-vindo à API de Comércio Eletrônico, uma solução abrangente projetada para simplificar e potencializar a gestão de sua loja online. Com foco na praticidade e eficiência, nossa API oferece suporte a três elementos essenciais: Usuário, Categoria e Produto.',
    )
    .setVersion('1.0')
    .addTag('Auth')
    .addTag('Usuarios')
    .addTag('Categorias')
    .addTag('Produtos')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );
  //app.useGlobalFilters(new HttpExcpetionFilter());
  app.useGlobalInterceptors(new ConflictInterceptor());
  app.useGlobalInterceptors(new DatabaseInterceptor());
  app.useGlobalInterceptors(new UnauthorizedInterceptor());
  app.useGlobalInterceptors(new NotFoundInterceptor());

  await app.listen(3030);
}
bootstrap();