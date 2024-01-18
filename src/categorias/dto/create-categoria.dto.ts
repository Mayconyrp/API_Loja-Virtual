import { IsString, IsOptional, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { CreateProdutoDto } from '../../produtos/dto/create-produto.dto';

export class CreateCategoriaDto {
  @IsString()
  nome_categoria: string;

  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => CreateProdutoDto)
  produtos?: CreateProdutoDto[];
}
