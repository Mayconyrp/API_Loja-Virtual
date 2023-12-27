import { IsEmail, IsNumber, IsString } from 'class-validator';

export class CreateUsuarioDto {
  @IsEmail()
  email: string;
  @IsString()
  nome: string;
  @IsNumber()
  senha: number;
  @IsNumber()
  telefone: number;
}
