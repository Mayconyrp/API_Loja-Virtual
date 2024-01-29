import { IsString, IsEmail, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger'; // Adicione esta importação

export class CreateEnderecoDto {
  //@ApiProperty({ example: 1, description: 'ID do endereço' })
  //id: number;

  @ApiProperty({ example: 'São Paulo', description: 'Nome da cidade' })
  @IsString()
  cidade: string;

  @ApiProperty({ example: 'Rua ABC', description: 'Nome da rua' })
  @IsString()
  rua: string;

  @ApiProperty({ example: '12345-678', description: 'CEP do endereço' })
  @IsString()
  cep: string;

  @ApiProperty({
    example: 'usuario@example.com',
    description: 'Endereço de e-mail (opcional)',
  })
  @IsOptional()
  @IsEmail()
  email?: string;
}
