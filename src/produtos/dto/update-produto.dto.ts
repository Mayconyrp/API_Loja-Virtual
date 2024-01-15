import { PartialType } from '@nestjs/mapped-types';
import { CreateProdutoDto } from '../dto/create-produto.dto';

export class UpdateProdutoDto extends PartialType(CreateProdutoDto) {
  id: any;
}
