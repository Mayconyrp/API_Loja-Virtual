import { Injectable } from '@nestjs/common';
import { CreateEnderecoDto } from './dto/create-endereco.dto';
import { UpdateEnderecoDto } from './dto/update-endereco.dto';
import { NotFoundError } from '../../src/common/errors/types/NotFoundError';
import { EnderecoEntity } from './entities/endereco.entity';
import { EnderecoRepository } from './repository/endereco.repository';
@Injectable()
export class EnderecosService {
  constructor(private readonly enderecoRepository: EnderecoRepository) {}

  async create(createEnderecoDto: CreateEnderecoDto): Promise<EnderecoEntity> {
    const createdUsuario =
      await this.enderecoRepository.create(createEnderecoDto);
    return createdUsuario;
  }

  findAll() {
    return this.enderecoRepository.findAll();
  }

  async findOne(id: number): Promise<EnderecoEntity> {
    const usuario = await this.enderecoRepository.findOne(id);
    if (!usuario) {
      throw new NotFoundError('Usuario não encontrado!');
    }
    return usuario;
  }

  update(id: number, updateEnderecoDto: UpdateEnderecoDto) {
    return this.enderecoRepository.update(id, updateEnderecoDto);
  }

  remove(id: number) {
    return this.enderecoRepository.remove(id);
  }
}
