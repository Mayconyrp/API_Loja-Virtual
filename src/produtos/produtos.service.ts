import { UpdateProdutoDto } from './dto/update-produto.dto';
import { Injectable } from '@nestjs/common';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { NotFoundError } from '../../src/common/errors/types/NotFoundError';
import { ProdutoRepository } from './repository/produto.repository';
import { ProdutoEntity } from './entities/produto.entity';

@Injectable()
export class ProdutosService {
  constructor(private readonly produtoRepository: ProdutoRepository) {}

  async create(createProdutoDto: CreateProdutoDto): Promise<ProdutoEntity> {
    const createdUsuario =
      await this.produtoRepository.create(createProdutoDto);
    return createdUsuario;
  }

  findAll() {
    return this.produtoRepository.findAll();
  }

  async findOne(id: number): Promise<ProdutoEntity> {
    const usuario = await this.produtoRepository.findOne(id);
    if (!usuario) {
      throw new NotFoundError('Usuario não encontrado!');
    }
    return usuario;
  }

  update(id: number, updateUsuarioDto: UpdateProdutoDto) {
    return this.produtoRepository.update(id, updateUsuarioDto);
  }

  remove(id: number) {
    return this.produtoRepository.remove(id);
  }
}
