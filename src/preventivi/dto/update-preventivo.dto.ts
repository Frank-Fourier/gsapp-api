// src/preventivi/dto/update-preventivo.dto.ts
import { PartialType } from '@nestjs/swagger';
import { CreatePreventivoDto } from './create-preventivo.dto';

export class UpdatePreventivoDto extends PartialType(CreatePreventivoDto) {}
