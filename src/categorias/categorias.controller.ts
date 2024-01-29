import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpStatus,
  HttpCode,
} from '@nestjs/common';
import { CategoriasService } from './categorias.service';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';
import {
  ApiTags,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiNoContentResponse,
} from '@nestjs/swagger'; // Adicione estas importações

@ApiTags('Categorias') // Define uma tag para agrupar as operações relacionadas à categoria
@Controller('categorias')
export class CategoriasController {
  constructor(private readonly categoriasService: CategoriasService) {}

  @ApiCreatedResponse({
    description: 'Categoria criada com sucesso',
    type: CreateCategoriaDto,
  })
  @HttpCode(HttpStatus.CREATED)
  @Post()
  create(@Body() createCategoriaDto: CreateCategoriaDto) {
    return this.categoriasService.create(createCategoriaDto);
  }

  @ApiOkResponse({
    description: 'Lista de categorias recuperada com sucesso',
    type: [CreateCategoriaDto],
  })
  @HttpCode(HttpStatus.OK)
  @Get()
  findAll() {
    return this.categoriasService.findAll();
  }

  @ApiOkResponse({
    description: 'Categoria encontrada com sucesso',
    type: CreateCategoriaDto,
  })
  @HttpCode(HttpStatus.OK)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categoriasService.findOne(+id);
  }

  @ApiOkResponse({
    description: 'Categoria atualizada com sucesso',
    type: CreateCategoriaDto,
  })
  @HttpCode(HttpStatus.OK)
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCategoriaDto: UpdateCategoriaDto,
  ) {
    return this.categoriasService.update(+id, updateCategoriaDto);
  }

  @ApiNoContentResponse({ description: 'Categoria removida com sucesso' })
  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categoriasService.remove(+id);
  }
}
