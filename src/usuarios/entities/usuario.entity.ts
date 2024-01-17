import { Usuario } from '@prisma/client';

export class UsuarioEntity implements Usuario {
  admin: boolean;
  id: number;
  email: string;
  nome: string;
  senha: string;
  telefone: number;
}
