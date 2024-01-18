import { IsString, IsNumber, IsOptional } from 'class-validator';

export class CreateProdutoDto {
  @IsOptional()
  @IsNumber()
  codigo: number;

  @IsString()
  nome_produto: string;

  @IsNumber()
  preco: number;

  @IsString()
  descricao: string;

  @IsString()
  imagem: string;

  @IsNumber()
  categoria_id?: number;
}
