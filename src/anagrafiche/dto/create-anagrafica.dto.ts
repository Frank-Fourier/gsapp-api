import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsEmail, IsOptional, MaxLength, IsDate, IsEnum, IsInt } from 'class-validator';
import { Type } from 'class-transformer';  // Import Type decorator
import { TipologiaAnagrafica } from '@prisma/client';

export class CreateAnagraficaDto {
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
  @IsOptional()
  @ApiProperty({ required: false })
  nazioneDomicilio: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ required: false })
  comuneDomicilio: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ required: false })
  indirizzoDomicilio: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ required: false })
  capDomicilio: string;

  @IsDate()
  @Type(() => Date)  // Use Type decorator to transform the string to Date
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
