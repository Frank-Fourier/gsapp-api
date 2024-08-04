// src/dati-patrimoniali-iniziali/dto/update-dati-patrimoniali-iniziali.dto.ts
import { PartialType } from '@nestjs/swagger';
import { CreateDatiPatrimonialiInizialiDto } from './create-dati-patrimoniali-iniziali.dto';

export class UpdateDatiPatrimonialiInizialiDto extends PartialType(CreateDatiPatrimonialiInizialiDto) {}
