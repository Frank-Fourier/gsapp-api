// src/tabelle/dto/create-tabella.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsInt, IsOptional, IsArray } from 'class-validator';

export class CreateTabellaDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  denominazione: string;

  @IsInt()
  @IsNotEmpty()
  @ApiProperty()
  totaleMillesimi: number;

  @IsArray()
  @IsNotEmpty()
  @ApiProperty({ type: [String] })
  ripartizioneMillesimi: string[];

  @IsArray()
  @IsNotEmpty()
  @ApiProperty({ type: [String] })
  percentualeNudaProprieta: string[];

  @IsArray()
  @IsNotEmpty()
  @ApiProperty({ type: [String] })
  percentualeUsufrutto: string[];

  @IsArray()
  @IsNotEmpty()
  @ApiProperty({ type: [String] })
  percentualeProprieta: string[];

  @IsArray()
  @IsNotEmpty()
  @ApiProperty({ type: [String] })
  percentualeConduttore: string[];

  @IsString()
  @IsOptional()
  @ApiProperty({ required: false })
  descrizione: string;

  @IsInt()
  @IsNotEmpty()
  @ApiProperty()
  condominioId: number;
}
