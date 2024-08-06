// src/unita-immobiliari/dto/create-unita-immobiliare.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsOptional, IsInt, IsEnum, IsArray, IsNumber, IsDate } from 'class-validator';
import { TipologiaImmobile } from '@prisma/client';
import { Type } from 'class-transformer';  // Import Type decorator

export class CreateUnitaImmobiliareDto {
  @IsEnum(TipologiaImmobile)
  @IsNotEmpty()
  @ApiProperty({ enum: TipologiaImmobile })
  tipologia: TipologiaImmobile;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  subalterno: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  superficie: number;

  @IsInt()
  @IsNotEmpty()
  @ApiProperty()
  vani: number;

  @IsString()
  @IsOptional()
  @ApiProperty({ required: false })
  scala: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ required: false })
  piano: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ required: false })
  interno: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ required: false })
  descrizione: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ required: false })
  note: string;

  @IsArray()
  @IsOptional()
  @ApiProperty({ type: [String], required: false })
  nudaProprietaAttiva: string[];

  @IsArray()
  @IsOptional()
  @ApiProperty({ type: [String], required: false })
  usufruttoAttivo: string[];

  @IsArray()
  @IsOptional()
  @ApiProperty({ type: [String], required: false })
  proprietarioAttivo: string[];

  @IsArray()
  @IsOptional()
  @ApiProperty({ type: [String], required: false })
  nudaProprietaPrecedente: string[];

  @IsArray()
  @IsOptional()
  @ApiProperty({ type: [String], required: false })
  usufruttoPrecendente: string[];

  @IsArray()
  @IsOptional()
  @ApiProperty({ type: [String], required: false })
  proprietarioPrecedente: string[];

  @IsArray()
  @IsOptional()
  @ApiProperty({ type: [String], required: false })
  conduttorePrecedente: string[];

  @IsDate()
  @Type(() => Date)  // Use Type decorator to transform the string to Date
  @IsNotEmpty()
  @ApiProperty({ type: String, format: 'date-time' })
  dataDiAttivazione: Date;

  @IsDate()
  @Type(() => Date)  // Use Type decorator to transform the string to Date
  @IsOptional()
  @ApiProperty({ type: String, format: 'date-time', required: false })
  dataDiDisattivazione?: Date;

  @IsInt()
  @IsNotEmpty()
  @ApiProperty()
  condominioId: number;
}
