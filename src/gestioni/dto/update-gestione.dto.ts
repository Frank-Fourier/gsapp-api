// src/gestioni/dto/update-gestione.dto.ts
import { PartialType } from '@nestjs/swagger';
import { CreateGestioneDto } from './create-gestione.dto';

export class UpdateGestioneDto extends PartialType(CreateGestioneDto) {}
