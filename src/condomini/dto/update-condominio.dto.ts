// src/condomini/dto/update-condominio.dto.ts
import { PartialType } from '@nestjs/swagger';
import { CreateCondominioDto } from './create-condominio.dto';

export class UpdateCondominioDto extends PartialType(CreateCondominioDto) {}
