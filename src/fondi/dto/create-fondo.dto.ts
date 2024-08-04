// src/fondo/dto/create-fondo.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsOptional, IsInt, IsNumber, IsEnum } from 'class-validator';
import { TipologiaFondo } from '@prisma/client';

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
  @IsNotEmpty()
  @ApiProperty()
  descrizione: string;

  @IsInt()
  @IsNotEmpty()
  @ApiProperty()
  condominioId: number;
}
