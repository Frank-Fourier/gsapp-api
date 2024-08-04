// src/fornitori/dto/create-fornitore.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsEmail, IsOptional, MaxLength, IsDate, IsEnum, IsInt } from 'class-validator';
import { TipologiaAnagrafica, TipologiaCassa, TipologiaIVA, TipologiaRitenuta, CausaliSomme } from '@prisma/client';

export class CreateFornitoreDto {
  @IsEmail()
  @IsNotEmpty()
  @ApiProperty()
  email: string;

  @IsEmail()
  @IsNotEmpty()
  @ApiProperty()
  emailPec: string;

  @IsEnum(TipologiaAnagrafica)
  @IsNotEmpty()
  @ApiProperty({ enum: TipologiaAnagrafica })
  tipologia: TipologiaAnagrafica;

  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  @ApiProperty()
  nome: string;

  @IsString()
  @IsOptional()
  @MaxLength(100)
  @ApiProperty({ required: false })
  cognome: string;

  @IsString()
  @IsOptional()
  @MaxLength(100)
  @ApiProperty({ required: false })
  ragioneSociale: string; // se societa

  @IsString()
  @IsOptional()
  @MaxLength(100)
  @ApiProperty({ required: false })
  responsabile: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  codiceFiscale: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ required: false })
  partitaIva: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  nazioneResidenza: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  comuneResidenza: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  indirizzoResidenza: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  capResidenza: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  nazioneDomicilio: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  comuneDomicilio: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  indirizzoDomicilio: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  capDomicilio: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  nazioneSedeLegale: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  comuneSedeLegale: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  indirizzoSedeLegale: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  capSedeLegale: string;

  @IsDate()
  @IsNotEmpty()
  @ApiProperty({ type: String, format: 'date-time' })
  dataNascita: Date;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  luogoNascita: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  telefono: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ required: false })
  cellulare: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ required: false })
  note: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  nomeBanca: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  iban: string;

  @IsEnum(TipologiaCassa)
  @IsNotEmpty()
  @ApiProperty({ enum: TipologiaCassa })
  cassaPrevidenza: TipologiaCassa;

  @IsString()
  @IsOptional()
  @ApiProperty({ required: false })
  inps: string;

  @IsEnum(TipologiaIVA)
  @IsOptional()
  @ApiProperty({ enum: TipologiaIVA, required: false, default: TipologiaIVA.ZERO })
  iva1: TipologiaIVA = TipologiaIVA.ZERO;

  @IsEnum(TipologiaIVA)
  @IsOptional()
  @ApiProperty({ enum: TipologiaIVA, required: false })
  iva2: TipologiaIVA;

  @IsEnum(TipologiaIVA)
  @IsOptional()
  @ApiProperty({ enum: TipologiaIVA, required: false })
  iva3: TipologiaIVA;

  @IsEnum(TipologiaRitenuta)
  @IsNotEmpty()
  @ApiProperty({ enum: TipologiaRitenuta })
  tipoRitenuta: TipologiaRitenuta;

  @IsEnum(CausaliSomme)
  @IsNotEmpty()
  @ApiProperty({ enum: CausaliSomme })
  causaliSommeErogate: CausaliSomme;

  @IsString()
  @IsOptional()
  @ApiProperty({ required: false })
  cciaa: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ required: false })
  inail: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ required: false })
  albo: string;

  @IsString({ each: true })
  @IsOptional()
  @ApiProperty({ type: [String], required: false })
  documenti: string[];

  @IsString({ each: true })
  @IsOptional()
  @ApiProperty({ type: [String], required: false })
  allegati: string[];

  @IsInt()
  @IsNotEmpty()
  @ApiProperty()
  amministratoreId: number;
}
