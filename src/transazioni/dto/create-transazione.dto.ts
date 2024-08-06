// src/transazione/dto/create-transazione.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString, IsNumber, IsDate, IsInt } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateTransazioneDto {
  @IsDate()
  @Type(() => Date)
  @IsNotEmpty()
  @ApiProperty({ type: String, format: 'date-time' })
  data: Date;

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

  @IsString()
  @IsOptional()
  @ApiProperty({ required: false })
  riferimento?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ required: false })
  provenienzaFornitore?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ required: false })
  provenienzaAnagrafica?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ required: false })
  destinazioneFornitore?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ required: false })
  destinazioneAnagrafica?: string;

  @IsInt()
  @IsOptional()
  @ApiProperty({ required: false })
  gestioneId?: number;

  @IsInt()
  @IsNotEmpty()
  @ApiProperty()
  condominioId: number;

  @IsInt()
  @IsOptional()
  @ApiProperty({ required: false })
  unitaImmobiliareId?: number;

  @IsInt()
  @IsNotEmpty()
  @ApiProperty()
  risorsaId: number;

  @IsInt()
  @IsOptional()
  @ApiProperty({ required: false })
  fondoId?: number;

  @IsInt()
  @IsOptional()
  @ApiProperty({ required: false })
  movimentoId?: number;
}
