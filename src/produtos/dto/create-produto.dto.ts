import { IsNumber, IsString } from 'class-validator';

export class CreateProdutoDto {
  @IsNumber()
  id: number;
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
