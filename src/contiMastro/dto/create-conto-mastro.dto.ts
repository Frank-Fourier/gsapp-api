// src/conto-mastro/dto/create-conto-mastro.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsInt, IsArray } from 'class-validator';

export class CreateContoMastroDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  descrizione: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  note: string;

  @IsInt()
  @IsNotEmpty()
  @ApiProperty()
  tabellaId: number;

  @IsArray()
  @IsNotEmpty()
  @ApiProperty({ type: [String] })
  conti: string[];

  @IsInt()
  @IsNotEmpty()
  @ApiProperty()
  condominioId: number;
}
