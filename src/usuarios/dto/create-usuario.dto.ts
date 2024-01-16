import {
  IsEmail,
  IsNumber,
  IsString,
  IsOptional,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { CreateEnderecoDto } from 'src/enderecos/dto/create-endereco.dto';

export class CreateUsuarioDto {
  @IsEmail()
  email: string;

  @IsString()
  nome: string;

  @IsNumber()
  senha: number;

  @IsNumber()
  telefone: number;

  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => CreateEnderecoDto)
  enderecos?: CreateEnderecoDto[];
}
