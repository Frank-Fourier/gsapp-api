// src/dipendenti/dto/create-dipendente.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsEmail, IsOptional, MaxLength, IsDate, IsEnum, IsInt } from 'class-validator';
import { Type } from 'class-transformer';  // Import Type decorator
import { CausaliSomme } from '@prisma/client';

export class CreateDipendenteDto {
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
  nome: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  @ApiProperty()
  cognome: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  codiceFiscale: string;

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

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  nomeBanca: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  iban: string;

  @IsEnum(CausaliSomme)
  @IsNotEmpty()
  @ApiProperty({ enum: CausaliSomme })
  causaliSommeErogate: CausaliSomme;

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
