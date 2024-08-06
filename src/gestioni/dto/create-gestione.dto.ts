// src/gestioni/dto/create-gestione.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString, IsInt, IsEnum, IsDate } from 'class-validator';
import { Type } from 'class-transformer';
import { TipologiaGestione } from '@prisma/client';

export class CreateGestioneDto {
  @IsInt()
  @IsOptional()
  @ApiProperty({ required: false })
  gestionePrecedenteId?: number;

  @IsEnum(TipologiaGestione)
  @IsNotEmpty()
  @ApiProperty({ enum: TipologiaGestione })
  tipologia: TipologiaGestione;

  @IsDate()
  @Type(() => Date)
  @IsNotEmpty()
  @ApiProperty({ type: String, format: 'date-time' })
  dataInizioGestione: Date;

  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @ApiProperty({ type: String, format: 'date-time', required: false })
  dataFineGestione?: Date;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  denominazione: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ required: false })
  descrizione?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ required: false })
  note?: string;

  @IsInt()
  @IsNotEmpty()
  @ApiProperty()
  condominioId: number;
}
