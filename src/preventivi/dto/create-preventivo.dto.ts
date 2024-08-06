// src/preventivi/dto/create-preventivo.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString, IsNumber, IsInt } from 'class-validator';

export class CreatePreventivoDto {
  @IsInt()
  @IsNotEmpty()
  @ApiProperty()
  gestioneId: number;

  @IsInt()
  @IsNotEmpty()
  @ApiProperty()
  contoMastroId: number;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  importo: number;

  @IsInt()
  @IsNotEmpty()
  @ApiProperty()
  numeroRate: number;

  @IsString()
  @IsOptional()
  @ApiProperty({ required: false })
  descrizione?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ required: false })
  note?: string;
}
