import { Categoria } from '@prisma/client';
export class CategoriaEntity implements Categoria {
  id: number;
  nome_categoria: string;
}
