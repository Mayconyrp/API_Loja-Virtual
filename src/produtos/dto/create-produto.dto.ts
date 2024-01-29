import { IsString, IsNumber, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateProdutoDto {
  @ApiProperty({ example: 12345, description: 'Código do produto (opcional)' })
  @IsOptional()
  @IsNumber()
  codigo: number;
  @ApiProperty({ example: 'Notebook', description: 'Nome do produto' })
  @IsString()
  nome_produto: string;
  @ApiProperty({ example: 999.99, description: 'Preço do produto' })
  @IsNumber()
  preco: number;
  @ApiProperty({
    example: 'Um ótimo produto',
    description: 'Descrição do produto',
  })
  @IsString()
  descricao: string;
  @ApiProperty({
    example: 'url_da_imagem.jpg',
    description: 'URL da imagem do produto',
  })
  @IsString()
  imagem: string;
  @ApiProperty({
    example: 1,
    description: 'ID da categoria do produto (opcional)',
  })
  @IsNumber()
  categoria_id?: number;
}
