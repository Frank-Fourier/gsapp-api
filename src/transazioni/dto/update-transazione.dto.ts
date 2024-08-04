// src/transazione/dto/update-transazione.dto.ts
import { PartialType } from '@nestjs/swagger';
import { CreateTransazioneDto } from './create-transazione.dto';

export class UpdateTransazioneDto extends PartialType(CreateTransazioneDto) {}
