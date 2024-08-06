// src/estratti-conto/dto/create-estratto-conto.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsOptional, IsArray, IsNumber, IsInt } from 'class-validator';

export class CreateEstrattoContoDto {
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  saldo: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  denominazione: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ required: false })
  descrizione: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ required: false })
  note: string;

  @IsArray()
  @IsNotEmpty()
  @ApiProperty({ type: [String] })
  transazioni: string[];

  @IsInt()
  @IsOptional()
  @ApiProperty({ required: false })
  risorsaId?: number;

  @IsInt()
  @IsOptional()
  @ApiProperty({ required: false })
  fondoId?: number;

  @IsInt()
  @IsNotEmpty()
  @ApiProperty()
  gestioneId: number;
}
