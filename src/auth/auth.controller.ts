import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import {
  ApiTags,
  ApiOperation,
  ApiOkResponse,
  ApiBadRequestResponse,
} from '@nestjs/swagger';

@ApiTags('Auth')
@Controller()
export class AuthController {
  constructor(private authService: AuthService) {}

  @ApiOperation({
    summary: 'Login do usuário',
    description: 'Autentica um usuário e gera um token de acesso.',
  })
  @ApiOkResponse({
    description: 'Usuário autenticado com sucesso e token gerado',
  })
  @ApiBadRequestResponse({ description: 'Credenciais inválidas' })
  @Post('login')
  async login(@Body() body) {
    console.log('Dados do Corpo:', body);
    return this.authService.validarUsuario(body.email, body.senha);
  }
}
