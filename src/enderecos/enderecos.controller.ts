import {
  Controller,
  Get,
  //Post,
  Body,
  Patch,
  Param,
  //Delete,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { EnderecosService } from './enderecos.service';
//import { CreateEnderecoDto } from './dto/create-endereco.dto';
import { UpdateEnderecoDto } from './dto/update-endereco.dto';

@Controller('enderecos')
export class EnderecosController {
  constructor(private readonly enderecosService: EnderecosService) {}

  @HttpCode(HttpStatus.OK)
  @Get()
  findAll() {
    return this.enderecosService.findAll();
  }

  @HttpCode(HttpStatus.OK)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.enderecosService.findOne(+id);
  }

  @HttpCode(HttpStatus.OK)
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateEnderecoDto: UpdateEnderecoDto,
  ) {
    return this.enderecosService.update(+id, updateEnderecoDto);
  }
}

/* 
  @Post()
  create(@Body() createEnderecoDto: CreateEnderecoDto) {
    return this.enderecosService.create(createEnderecoDto);
  }
@Delete(':id')
  remove(@Param('id') id: string) {
    return this.enderecosService.remove(+id);
  }
*/
