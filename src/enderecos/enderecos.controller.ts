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
import { EnderecosService } from './enderecos.service';
import { CreateEnderecoDto } from './dto/create-endereco.dto';
import { UpdateEnderecoDto } from './dto/update-endereco.dto';
import {
  ApiTags,
  ApiOkResponse,
  ApiNotFoundResponse,
  ApiCreatedResponse,
  ApiNoContentResponse,
} from '@nestjs/swagger';

@ApiTags('Enderecos')
@Controller('enderecos')
export class EnderecosController {
  constructor(private readonly enderecosService: EnderecosService) {}

  @ApiOkResponse({ description: 'Lista de endereços recuperada com sucesso' })
  @HttpCode(HttpStatus.OK)
  @Get()
  findAll() {
    return this.enderecosService.findAll();
  }

  @ApiOkResponse({ description: 'Endereço encontrado com sucesso' })
  @ApiNotFoundResponse({ description: 'Endereço não encontrado' })
  @HttpCode(HttpStatus.OK)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.enderecosService.findOne(+id);
  }

  @ApiCreatedResponse({
    description: 'Endereço criado com sucesso',
    type: CreateEnderecoDto,
  })
  @HttpCode(HttpStatus.CREATED)
  @Post()
  create(@Body() createEnderecoDto: CreateEnderecoDto) {
    return this.enderecosService.create(createEnderecoDto);
  }

  @ApiOkResponse({ description: 'Endereço atualizado com sucesso' })
  @ApiNotFoundResponse({ description: 'Endereço não encontrado' })
  @HttpCode(HttpStatus.OK)
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateEnderecoDto: UpdateEnderecoDto,
  ) {
    return this.enderecosService.update(+id, updateEnderecoDto);
  }

  @ApiNoContentResponse({ description: 'Endereço removido com sucesso' })
  @ApiNotFoundResponse({ description: 'Endereço não encontrado' })
  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.enderecosService.remove(+id);
  }
}
