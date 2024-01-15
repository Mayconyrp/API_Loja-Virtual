import { IsString, IsArray, ValidateNested, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';
import { UpdateProdutoDto } from '../../produtos/dto/update-produto.dto';

export class UpdateCategoriaDto {
  @IsOptional()
  @IsString()
  nome_categoria?: string;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => UpdateProdutoDto)
  produtos?: UpdateProdutoDto[];
}
