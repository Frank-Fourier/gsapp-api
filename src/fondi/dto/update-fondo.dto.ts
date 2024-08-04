// src/fondo/dto/update-fondo.dto.ts
import { PartialType } from '@nestjs/swagger';
import { CreateFondoDto } from './create-fondo.dto';

export class UpdateFondoDto extends PartialType(CreateFondoDto) {}
