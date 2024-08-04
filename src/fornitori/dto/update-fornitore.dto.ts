// src/fornitori/dto/update-fornitore.dto.ts
import { PartialType } from '@nestjs/swagger';
import { CreateFornitoreDto } from './create-fornitore.dto';

export class UpdateFornitoreDto extends PartialType(CreateFornitoreDto) {}
