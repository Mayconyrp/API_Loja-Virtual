import { Usuario } from '@prisma/client';

export class UsuarioEntity implements Usuario {
  id: number;
  email: string;
  nome: string;
  senha: number;
  telefone: number;
}
