// src/conto-mastro/dto/update-conto-mastro.dto.ts
import { PartialType } from '@nestjs/swagger';
import { CreateContoMastroDto } from './create-conto-mastro.dto';

export class UpdateContoMastroDto extends PartialType(CreateContoMastroDto) {}
