import { IsString, IsOptional, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { CreateProdutoDto } from '../../produtos/dto/create-produto.dto';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCategoriaDto {
  @ApiProperty({ example: 'Eletrônicos', description: 'Nome da categoria' })
  @IsString()
  nome_categoria: string;

  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => CreateProdutoDto)
  produtos?: CreateProdutoDto[];
}
