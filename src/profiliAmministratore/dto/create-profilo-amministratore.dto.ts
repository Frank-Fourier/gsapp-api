import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsEmail, IsArray } from 'class-validator';

export class CreateProfiloAmministratoreDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  nome: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  cognome: string;

  @IsEmail()
  @IsNotEmpty()
  @ApiProperty()
  email: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  password: string;

  @IsArray()
  @IsString({ each: true })
  @ApiProperty({ type: [String] })
  documenti: string[];

  @IsArray()
  @IsString({ each: true })
  @ApiProperty({ type: [String] })
  allegati: string[];

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  logo: string;
}
