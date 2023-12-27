import { IsString } from 'class-validator';

export class CreateEnderecoDto {
  @IsString()
  cidade: string;

  @IsString()
  rua: string;

  @IsString()
  cep: string;
}
