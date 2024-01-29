import { PartialType } from '@nestjs/swagger';
import { CreateProdutoDto } from '../dto/create-produto.dto';

export class UpdateProdutoDto extends PartialType(CreateProdutoDto) {}
