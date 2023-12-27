import { Endereco } from '@prisma/client';

export class EnderecoEntity implements Endereco {
  id: number;
  cidade: string;
  rua: string;
  cep: string;
}
