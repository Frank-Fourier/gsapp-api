// src/condomini/dto/create-condominio.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsOptional, IsInt, IsDate, MaxLength, IsEnum, IsArray, IsNumber } from 'class-validator';
import { TipologiaCondominio } from '@prisma/client';

export class CreateCondominioDto {
  @IsString()
  @IsOptional()
  @ApiProperty({ required: false })
  codice: string;

  @IsEnum(TipologiaCondominio)
  @IsNotEmpty()
  @ApiProperty({ enum: TipologiaCondominio })
  tipologia: TipologiaCondominio;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  denominazione: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  codiceFiscale: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  comune: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  indirizzo: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  cap: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ required: false })
  sezioneUrbana: string;

  @IsInt()
  @IsNotEmpty()
  @ApiProperty()
  foglio: number;

  @IsInt()
  @IsNotEmpty()
  @ApiProperty()
  particella: number;

  @IsNumber()
  @IsOptional()
  @ApiProperty({ required: false })
  totalSuperficie: number;

  @IsInt()
  @IsOptional()
  @ApiProperty({ required: false })
  totaleUnita: number;

  @IsNumber()
  @IsOptional()
  @ApiProperty({ required: false })
  totaleVani: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  posizioneINPS: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  posizioneINAIL: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ required: false })
  luogoAssemblea1: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ required: false })
  luogoAssemblea2: string;

  @IsInt()
  @IsNotEmpty()
  @ApiProperty()
  decimaliMillesimi: number;

  @IsString()
  @IsOptional()
  @ApiProperty({ required: false })
  descrizione: string;

  @IsArray()
  @IsOptional()
  @ApiProperty({ type: [String], required: false })
  allegati: string[];

  @IsDate()
  @IsNotEmpty()
  @ApiProperty({ type: String, format: 'date-time' })
  dataPresaInCarico: Date;

  @IsInt()
  @IsNotEmpty()
  @ApiProperty()
  amministratoreId: number;
}
