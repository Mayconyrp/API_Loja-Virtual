//local.auth.ts
/*
import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '../auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(email: string, senha: string): Promise<any> {
    const user = await this.authService.validarUsuario(email, senha);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
*/
//jwt-strategy.ts
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { JwtPayload } from './jwt-payload';
import { UsuariosService } from '../../usuarios/usuarios.service';
import { UsuarioEntity } from 'src/usuarios/entities/usuario.entity';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(private usuariosService: UsuariosService) {
    super({
      secretOrKey: 'Segredo_do_JWT',
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
    });
  }
  async validate(payload: JwtPayload): Promise<UsuarioEntity> {
    const { email } = payload;
    const user = await this.usuariosService.findByEmail(email);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
