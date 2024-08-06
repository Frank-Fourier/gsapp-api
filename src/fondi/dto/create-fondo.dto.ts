// src/fondo/dto/create-fondo.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsOptional, IsInt, IsNumber, IsEnum, IsDate } from 'class-validator';
import { TipologiaFondo } from '@prisma/client';
import { Type } from 'class-transformer';  // Import Type decorator

export class CreateFondoDto {
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  saldo: number;

  @IsEnum(TipologiaFondo)
  @IsNotEmpty()
  @ApiProperty({ enum: TipologiaFondo })
  tipologia: TipologiaFondo;

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

  @IsDate()
  @Type(() => Date)  // Use Type decorator to transform the string to Date
  @IsOptional()
  @ApiProperty({ type: String, format: 'date-time', required: false })
  dataArchiviazione?: Date;

  @IsInt()
  @IsNotEmpty()
  @ApiProperty()
  condominioId: number;
}
