//auth.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller()
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Body() body) {
    console.log('Dados do Corpo:', body);
    return this.authService.validarUsuario(body.email, body.senha);
  }
}
