// src/conto-mastro/dto/create-conto-mastro.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsInt, IsArray, IsOptional, IsDate } from 'class-validator';
import { Type } from 'class-transformer';  // Import Type decorator

export class CreateContoMastroDto {
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

  @IsInt()
  @IsNotEmpty()
  @ApiProperty()
  tabellaId: number;

  @IsArray()
  @IsNotEmpty()
  @ApiProperty({ type: [String] })
  conti: string[];

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
