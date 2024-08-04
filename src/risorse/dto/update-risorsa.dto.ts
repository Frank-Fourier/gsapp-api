// src/risorsa/dto/update-risorsa.dto.ts
import { PartialType } from '@nestjs/swagger';
import { CreateRisorsaDto } from './create-risorsa.dto';

export class UpdateRisorsaDto extends PartialType(CreateRisorsaDto) {}
