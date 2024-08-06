// src/estratti-conto/dto/update-estratto-conto.dto.ts
import { PartialType } from '@nestjs/swagger';
import { CreateEstrattoContoDto } from './create-estratto-conto.dto';

export class UpdateEstrattoContoDto extends PartialType(CreateEstrattoContoDto) {}
