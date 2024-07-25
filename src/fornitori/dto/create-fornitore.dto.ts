import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsString,
  IsEmail,
  //IsOptional,
  MaxLength,
} from 'class-validator';

enum TipologiaAnagrafica {
  CONDOMINO = 'CONDOMINO',
  GENERICO = 'GENERICO',
}

export class CreateAnagraficaDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ enum: TipologiaAnagrafica })
  tipologia: TipologiaAnagrafica;

  @IsEmail()
  @IsNotEmpty()
  @ApiProperty()
  email: string;

  @IsEmail()
  @IsNotEmpty()
  @ApiProperty()
  emailPec: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  @ApiProperty()
  denominazione: string;

  @IsString()
  @MaxLength(100)
  @ApiProperty()
  responsabile: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  codiceFiscale: string;

  @IsString()
  @ApiProperty()
  partitaIva: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  nazione: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  comune: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  indirizzo: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  telefono: string;

  @IsString()
  @ApiProperty()
  cellulare: string;

  @IsString()
  @ApiProperty()
  note: string;

  @IsString()
  @ApiProperty()
  autorizzazione: string;
}
