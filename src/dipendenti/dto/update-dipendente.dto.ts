// src/dipendenti/dto/update-dipendente.dto.ts
import { PartialType } from '@nestjs/swagger';
import { CreateDipendenteDto } from './create-dipendente.dto';

export class UpdateDipendenteDto extends PartialType(CreateDipendenteDto) {}
