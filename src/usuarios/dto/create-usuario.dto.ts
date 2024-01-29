import {
  IsEmail,
  IsNumber,
  IsString,
  IsOptional,
  IsBoolean,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { CreateEnderecoDto } from 'src/enderecos/dto/create-endereco.dto';

export class CreateUsuarioDto {
  @IsEmail()
  @ApiProperty({
    example: 'usuario@example.com',
    description: 'Endereço de e-mail do usuário',
  })
  email: string;

  @IsString()
  @ApiProperty({
    example: 'Nome do Usuário',
    description: 'Nome completo do usuário',
  })
  nome: string;

  @IsString()
  @ApiProperty({
    example: 'senha123',
    description: 'Senha do usuário',
  })
  senha: string;

  @IsNumber()
  @ApiProperty({
    example: 123456789,
    description: 'Número de telefone do usuário',
  })
  telefone: number;

  @IsBoolean()
  @IsOptional()
  @ApiProperty({
    example: false,
    description: 'Indica se o usuário é um administrador',
    required: false,
  })
  admin?: boolean;
  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => CreateEnderecoDto)
  @ApiProperty({ type: [CreateEnderecoDto], required: false })
  enderecos?: CreateEnderecoDto[];
}
