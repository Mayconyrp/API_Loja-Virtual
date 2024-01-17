import {
  IsEmail,
  IsNumber,
  IsString,
  IsOptional,
  IsBoolean,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { CreateEnderecoDto } from 'src/enderecos/dto/create-endereco.dto';

export class CreateUsuarioDto {
  @IsEmail()
  email: string;

  @IsString()
  nome: string;

  @IsString()
  senha: string;

  @IsNumber()
  telefone: number;

  @IsBoolean()
  @IsOptional()
  admin?: boolean;

  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => CreateEnderecoDto)
  enderecos?: CreateEnderecoDto[];
}
