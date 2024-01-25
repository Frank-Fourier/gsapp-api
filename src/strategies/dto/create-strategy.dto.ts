// src/strategies/dto/create-strategy.dto.ts

import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  /*IsBoolean,*/
  IsString,
  MaxLength,
  /*MinLength,*/
} from 'class-validator';

export class CreateStrategyDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  @ApiProperty()
  title: string;

  @IsString()
  @IsOptional()
  @MaxLength(300)
  @ApiProperty({ required: false })
  description?: string;

  @IsNumber()
  @IsPositive()
  @ApiProperty()
  initialVPS: number;

  @IsDateString()
  @ApiProperty()
  initialTime: string;

  @IsArray()
  @ApiProperty({ type: [String] })
  dexPairs: string[];

  @IsArray()
  @ApiProperty({ type: [String] })
  dexAccounts: string[];

  @IsArray()
  @ApiProperty({ type: [String] })
  cexAccounts: string[];

  @IsArray()
  @ApiProperty({ type: [String] })
  symbols: string[];

  @IsArray()
  @ApiProperty({ type: [String] })
  poolAddresses: string[];

  @IsString()
  @IsOptional()
  @ApiProperty()
  sharesAddress: string;
}
