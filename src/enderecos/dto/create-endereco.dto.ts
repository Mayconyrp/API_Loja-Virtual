import { IsString, IsEmail } from 'class-validator';

export class CreateEnderecoDto {
  id: number;
  @IsString()
  cidade: string;
  @IsString()
  rua: string;
  @IsString()
  cep: string;
  @IsEmail()
  email?: string;
}
