// src/transazione/dto/create-transazione.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString, IsNumber, IsDate, IsInt } from 'class-validator';
import { Type } from 'class-transformer';  // Import Type decorator

export class CreateTransazioneDto {
  @IsDate()
  @Type(() => Date)  // Use Type decorator to transform the string to Date
  @IsNotEmpty()
  @ApiProperty({ type: String, format: 'date-time' })
  data: Date;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  importo: number;

  @IsString()
  @IsOptional()
  @ApiProperty({ required: false })
  descrizione?: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  riferimento: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  provenienzaFornitore: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  provenienzaAnagrafica: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  destinazioneFornitore: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  destinazioneAnagrafica: string;

  @IsInt()
  @IsNotEmpty()
  @ApiProperty()
  condominioId: number;

  @IsInt()
  @IsOptional()
  @ApiProperty({ required: false })
  unitaImmobiliareId?: number;

  @IsInt()
  @IsNotEmpty()
  @ApiProperty()
  risorsaId: number;

  @IsInt()
  @IsOptional()
  @ApiProperty({ required: false })
  fondoId?: number;
}
