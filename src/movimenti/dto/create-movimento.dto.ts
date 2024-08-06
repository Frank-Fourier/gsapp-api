// src/movimenti/dto/create-movimento.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString, IsNumber, IsDate, IsEnum, IsInt } from 'class-validator';
import { Type } from 'class-transformer';
import { TipologiaMovimento } from '@prisma/client';

export class CreateMovimentoDto {
  @IsEnum(TipologiaMovimento)
  @IsNotEmpty()
  @ApiProperty({ enum: TipologiaMovimento })
  tipologia: TipologiaMovimento;

  @IsDate()
  @Type(() => Date)
  @IsNotEmpty()
  @ApiProperty({ type: String, format: 'date-time' })
  dataScadenza: Date;

  @IsDate()
  @Type(() => Date)
  @IsNotEmpty()
  @ApiProperty({ type: String, format: 'date-time' })
  dataEmissione: Date;

  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @ApiProperty({ type: String, format: 'date-time', required: false })
  dataPagamento?: Date;

  @IsNumber()
  @IsOptional()
  @ApiProperty({ required: false })
  ritenuta?: number;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  importo: number;

  @IsString()
  @IsOptional()
  @ApiProperty({ required: false })
  descrizione?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ required: false })
  note?: string;

  @IsInt()
  @IsOptional()
  @ApiProperty({ required: false })
  risorsaId?: number;

  @IsInt()
  @IsOptional()
  @ApiProperty({ required: false })
  unitaImmobiliareId?: number;

  @IsInt()
  @IsOptional()
  @ApiProperty({ required: false })
  fornitoreId?: number;

  @IsInt()
  @IsOptional()
  @ApiProperty({ required: false })
  dipendenteId?: number;

  @IsInt()
  @IsOptional()
  @ApiProperty({ required: false })
  gestioneId?: number;

  @IsInt()
  @IsNotEmpty()
  @ApiProperty()
  condominioId: number;
}
