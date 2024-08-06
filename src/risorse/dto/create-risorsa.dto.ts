// src/risorsa/dto/create-risorsa.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsOptional, IsInt, IsNumber, IsDate } from 'class-validator';
import { Type } from 'class-transformer';  // Import Type decorator

export class CreateRisorsaDto {
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
  descrizione?: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  istitutoCredito: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ required: false })
  agenzia?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ required: false })
  iban?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ required: false })
  codiceBIC?: string;

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
