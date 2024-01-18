import { Produto } from '@prisma/client';

export class ProdutoEntity implements Produto {
  id: number;
  codigo: number;
  nome_produto: string;
  preco: number;
  descricao: string;
  imagem: string;
  categoria_id: number;
}
