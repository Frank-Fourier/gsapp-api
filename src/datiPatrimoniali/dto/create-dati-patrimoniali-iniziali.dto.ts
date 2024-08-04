// src/dati-patrimoniali-iniziali/dto/create-dati-patrimoniali-iniziali.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString, IsInt, IsArray } from 'class-validator';

export class CreateDatiPatrimonialiInizialiDto {
  @IsArray()
  @IsNotEmpty()
  @ApiProperty({ type: [Number] })
  debitiUnitaImmobiliari: number[];

  @IsArray()
  @IsNotEmpty()
  @ApiProperty({ type: [String] })
  debitiDettaglio: string[];

  @IsArray()
  @IsNotEmpty()
  @ApiProperty({ type: [Number] })
  creditiUnitaImmobiliari: number[];

  @IsArray()
  @IsNotEmpty()
  @ApiProperty({ type: [String] })
  dettaglioUnitaImmobiliare: string[];

  @IsArray()
  @IsNotEmpty()
  @ApiProperty({ type: [Number] })
  debitiFornitori: number[];

  @IsArray()
  @IsNotEmpty()
  @ApiProperty({ type: [String] })
  dettaglioFornitori: string[];

  @IsArray()
  @IsNotEmpty()
  @ApiProperty({ type: [Number] })
  fornitoriCrediti: number[];

  @IsArray()
  @IsNotEmpty()
  @ApiProperty({ type: [String] })
  dettaglioFornitoriCrediti: string[];

  @IsArray()
  @IsNotEmpty()
  @ApiProperty({ type: [String] })
  risorseGestione: string[];

  @IsArray()
  @IsNotEmpty()
  @ApiProperty({ type: [Number] })
  saldoRisorse: number[];

  @IsArray()
  @IsNotEmpty()
  @ApiProperty({ type: [String] })
  fondiGestione: string[];

  @IsArray()
  @IsNotEmpty()
  @ApiProperty({ type: [Number] })
  consistenzaFondo: number[];

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  descrizione: string;

  @IsInt()
  @IsNotEmpty()
  @ApiProperty()
  condominioId: number;
}
