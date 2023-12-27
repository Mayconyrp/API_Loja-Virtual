import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { UsuarioRepository } from 'src/usuarios/repository/usuario.repository';
import { NotFoundError } from 'src/common/errors/types/NotFoundError';
import { UsuarioEntity } from './entities/usuario.entity';
//import { UnauthorizedError } from 'src/common/errors/types/UnauthorizedError';

@Injectable()
export class UsuariosService {
  constructor(private readonly repository: UsuarioRepository) {}

  create(createUsuarioDto: CreateUsuarioDto) {
    return this.repository.create(createUsuarioDto);
  }

  findAll() {
    //throw new UnauthorizedError('Nao autorizado');
    return this.repository.findAll();
  }

  async findOne(id: number): Promise<UsuarioEntity> {
    //return this.repository.findOne(id);
    const usuario = await this.repository.findOne(id);
    if (!usuario) {
      throw new NotFoundError('Usuario não encontrado!');
    }
    return usuario;
  }

  update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    return this.repository.update(id, updateUsuarioDto);
  }

  remove(id: number) {
    return this.repository.remove(id);
  }
}
