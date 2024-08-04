// src/tabelle/dto/update-tabella.dto.ts
import { PartialType } from '@nestjs/swagger';
import { CreateTabellaDto } from './create-tabella.dto';

export class UpdateTabellaDto extends PartialType(CreateTabellaDto) {}
