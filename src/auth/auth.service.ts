//auth.service.ts
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsuariosService } from 'src/usuarios/usuarios.service';
import { UsuarioEntity } from 'src/usuarios/entities/usuario.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usuariosService: UsuariosService,
    private jwtService: JwtService,
  ) {}

  async validarUsuario(email: string, senha: string): Promise<any> {
    const usuario = await this.usuariosService.findByEmail(email);
    if (!usuario) {
      throw new UnauthorizedException('Usuário ou Senha Inválidos');
    }

    const isSenhaValid = await bcrypt.compare(senha, usuario.senha);

    if (isSenhaValid) {
      const token = await this.gerarToken(usuario);
      return { usuario, token };
    }

    throw new UnauthorizedException('Usuário ou Senha Inválidos');
  }

  async gerarToken(payload: UsuarioEntity) {
    return {
      access_token: this.jwtService.sign(
        { email: payload.email },
        {
          secret: 'Segredo_do_JWT',
          expiresIn: '50s',
        },
      ),
    };
  }
}
