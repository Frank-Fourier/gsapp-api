import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsInt, IsOptional, IsArray, IsDate, IsNumber } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateTabellaDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  denominazione: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  totaleMillesimi: number;

  @IsArray()
  @IsNotEmpty()
  @ApiProperty({ type: [Number] })
  ripartizioneMillesimi: number[];

  @IsArray()
  @IsNotEmpty()
  @ApiProperty({ type: [String] })
  percentualeNudaProprieta: string[];

  @IsArray()
  @IsNotEmpty()
  @ApiProperty({ type: [String] })
  percentualeUsufrutto: string[];

  @IsArray()
  @IsNotEmpty()
  @ApiProperty({ type: [String] })
  percentualeProprieta: string[];

  @IsArray()
  @IsNotEmpty()
  @ApiProperty({ type: [String] })
  percentualeConduttore: string[];

  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @ApiProperty({ type: String, format: 'date-time', required: false })
  dataArchiviazione?: Date;

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
  condominioId: number;
}
