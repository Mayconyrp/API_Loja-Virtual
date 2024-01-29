import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { ProdutosService } from './produtos.service';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';
import {
  ApiTags,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiNotFoundResponse,
  ApiNoContentResponse,
} from '@nestjs/swagger';

@ApiTags('Produtos') // Define uma tag para agrupar as operações relacionadas a produtos
@Controller('produtos')
export class ProdutosController {
  constructor(private readonly produtosService: ProdutosService) {}

  @ApiCreatedResponse({
    description: 'Produto criado com sucesso',
    type: CreateProdutoDto,
  })
  @HttpCode(HttpStatus.CREATED)
  @Post()
  create(@Body() createProdutoDto: CreateProdutoDto) {
    return this.produtosService.create(createProdutoDto);
  }

  @ApiOkResponse({
    description: 'Lista de produtos recuperada com sucesso',
    type: [CreateProdutoDto],
  })
  @HttpCode(HttpStatus.OK)
  @Get()
  findAll() {
    return this.produtosService.findAll();
  }

  @ApiOkResponse({
    description: 'Produto encontrado com sucesso',
    type: CreateProdutoDto,
  })
  @ApiNotFoundResponse({ description: 'Produto não encontrado' })
  @HttpCode(HttpStatus.OK)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.produtosService.findOne(+id);
  }

  @ApiOkResponse({
    description: 'Produto atualizado com sucesso',
    type: CreateProdutoDto,
  })
  @ApiNotFoundResponse({ description: 'Produto não encontrado' })
  @HttpCode(HttpStatus.OK)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProdutoDto: UpdateProdutoDto) {
    return this.produtosService.update(+id, updateProdutoDto);
  }

  @ApiNoContentResponse({ description: 'Produto removido com sucesso' })
  @ApiNotFoundResponse({ description: 'Produto não encontrado' })
  @HttpCode(HttpStatus.NOT_FOUND)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.produtosService.remove(+id);
  }
}
