// src/unita-immobiliari/dto/update-unita-immobiliare.dto.ts
import { PartialType } from '@nestjs/swagger';
import { CreateUnitaImmobiliareDto } from './create-unita-immobiliare.dto';

export class UpdateUnitaImmobiliareDto extends PartialType(CreateUnitaImmobiliareDto) {}
