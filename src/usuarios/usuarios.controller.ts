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
import { UsuarioEntity } from './entities/usuario.entity';
import {
  ApiTags,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiBearerAuth,
  ApiNotFoundResponse,
} from '@nestjs/swagger'; // Adicione estas importações

@ApiTags('Usuarios') // Define uma tag para agrupar as operações relacionadas ao usuário
@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @ApiCreatedResponse({
    description: 'Usuário criado com sucesso',
    type: UsuarioEntity,
  })
  @HttpCode(HttpStatus.CREATED)
  @Post()
  async create(@Body() createUsuarioDto: CreateUsuarioDto) {
    return this.usuariosService.create(createUsuarioDto);
  }

  @ApiOkResponse({
    description: 'Lista de usuários recuperada com sucesso',
    type: [UsuarioEntity],
  })
  @HttpCode(HttpStatus.OK)
  @Get()
  findAll() {
    return this.usuariosService.findAll();
  }

  @ApiOkResponse({ description: 'Rota restrita acessada com sucesso' })
  @ApiBearerAuth()
  @HttpCode(HttpStatus.OK)
  @Get('/restrita')
  @UseGuards(AuthGuard('jwt'))
  rotarestrita() {
    return 'Parabéns!! Você acessou a rota restrita';
  }

  @ApiOkResponse({
    description: 'Detalhes do usuário recuperados com sucesso',
    type: UsuarioEntity,
  })
  @ApiNotFoundResponse({ description: 'Usuário não encontrado' })
  @HttpCode(HttpStatus.OK)
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<UsuarioEntity> {
    return this.usuariosService.findOne(+id);
  }

  /* @ApiOkResponse({
    description: 'Usuário encontrado com sucesso',
    type: UsuarioEntity,
  })
  @ApiNotFoundResponse({ description: 'Usuário não encontrado' })
  @HttpCode(HttpStatus.OK)
  @Post('email')
  findByEmail(@Body('email') email: string) {
    return this.usuariosService.findByEmail(email);
  }
*/
  @ApiOkResponse({
    description: 'Usuário atualizado com sucesso',
    type: UsuarioEntity,
  })
  @ApiNotFoundResponse({ description: 'Usuário não encontrado' })
  @HttpCode(HttpStatus.OK)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUsuarioDto: UpdateUsuarioDto) {
    return this.usuariosService.update(+id, updateUsuarioDto);
  }

  @ApiOkResponse({
    description: 'Usuário removido com sucesso',
    type: UsuarioEntity,
  })
  @ApiNotFoundResponse({ description: 'Usuário não encontrado' })
  @HttpCode(HttpStatus.NOT_FOUND)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usuariosService.remove(+id);
  }
}
