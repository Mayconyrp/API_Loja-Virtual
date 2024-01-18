import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  HttpStatus,
  HttpCode,
} from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { AuthGuard } from '@nestjs/passport';
import { UsuarioEntity } from './entities/usuario.entity'; // Certifique-se de importar corretamente a entidade

@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}
  @HttpCode(HttpStatus.CREATED)
  @Post()
  async create(@Body() createUsuarioDto: CreateUsuarioDto) {
    return this.usuariosService.create(createUsuarioDto);
  }

  @HttpCode(HttpStatus.OK)
  @Get()
  findAll() {
    return this.usuariosService.findAll();
  }

  @HttpCode(HttpStatus.OK)
  @Get('/restrita')
  @UseGuards(AuthGuard('jwt'))
  rotarestrita() {
    return 'Parabéns!! Você acessou a rota restrita';
  }

  @HttpCode(HttpStatus.OK)
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<UsuarioEntity> {
    return this.usuariosService.findOne(+id);
  }

  @HttpCode(HttpStatus.OK)
  @Post('email')
  findByEmail(@Body('email') email: string) {
    return this.usuariosService.findByEmail(email);
  }

  @HttpCode(HttpStatus.OK)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUsuarioDto: UpdateUsuarioDto) {
    return this.usuariosService.update(+id, updateUsuarioDto);
  }

  @HttpCode(HttpStatus.NOT_FOUND)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usuariosService.remove(+id);
  }
}
