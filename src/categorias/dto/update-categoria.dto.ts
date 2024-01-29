import { IsString, IsArray, ValidateNested, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';
import { UpdateProdutoDto } from '../../produtos/dto/update-produto.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateCategoriaDto {
  @IsOptional()
  @IsString()
  @ApiProperty({
    example: 'Nova Categoria',
    description: 'Novo nome da categoria',
    required: false,
  })
  nome_categoria?: string;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => UpdateProdutoDto)
  produtos?: UpdateProdutoDto[];
}
