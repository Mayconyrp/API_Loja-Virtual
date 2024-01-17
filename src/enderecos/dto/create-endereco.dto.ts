import { IsString, IsEmail, IsOptional } from 'class-validator';

export class CreateEnderecoDto {
  id: number;
  @IsString()
  cidade: string;
  @IsString()
  rua: string;
  @IsString()
  cep: string;
  @IsOptional()
  @IsEmail()
  email?: string;
}
