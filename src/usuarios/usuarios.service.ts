import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { UsuarioRepository } from './repository/usuario.repository';
import { UsuarioEntity } from './entities/usuario.entity';
import { NotFoundError } from 'src/common/errors/types/NotFoundError';

@Injectable()
export class UsuariosService {
  constructor(private readonly usuarioRepository: UsuarioRepository) {}

  async create(createUsuarioDto: CreateUsuarioDto): Promise<UsuarioEntity> {
    const createdUsuario =
      await this.usuarioRepository.create(createUsuarioDto);
    return createdUsuario;
  }

  findAll() {
    return this.usuarioRepository.findAll();
  }

  async findOne(id: number): Promise<UsuarioEntity> {
    const usuario = await this.usuarioRepository.findOne(id);
    if (!usuario) {
      throw new NotFoundError('Usuario não encontrado!');
    }
    return usuario;
  }

  async findByEmail(email: string): Promise<UsuarioEntity | null> {
    const usuario = await this.usuarioRepository.findByEmail(email);
    if (!usuario) {
      throw new NotFoundError('Usuario não encontrado!');
    }
    return usuario;
  }

  update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    return this.usuarioRepository.update(id, updateUsuarioDto);
  }

  async remove(id: number): Promise<string> {
    const usuario = await this.usuarioRepository.remove(id);

    if (!usuario) {
      throw new NotFoundException(`Usuário com ID ${id} não encontrado.`);
    }

    return `Usuário com ID ${id} deletado com sucesso.`;
  }
}
