// src/risorsa/dto/create-risorsa.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsOptional, IsInt, IsNumber } from 'class-validator';

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
  @IsNotEmpty()
  @ApiProperty()
  descrizione: string;

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

  @IsInt()
  @IsNotEmpty()
  @ApiProperty()
  condominioId: number;
}
