import { UsuariosModule } from 'src/usuarios/usuarios.module';
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy } from './strategies/jwt-strategy';

@Module({
  imports: [
    UsuariosModule,
    PassportModule,
    JwtModule.register({
      secret: 'Segredo_do_JWT',
      signOptions: { expiresIn: '30d' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
})
export class AuthModule {}
