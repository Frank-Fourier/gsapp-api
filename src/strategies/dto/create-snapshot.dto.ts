// src/strategies/dto/create-snapshot.dto.ts

import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsDate } from 'class-validator';

export class CreateSnapshotDto {
  @IsNumber()
  @ApiProperty()
  VPS: number;

  @IsNumber()
  @ApiProperty()
  APY: number;

  @IsNumber()
  @ApiProperty()
  NAV: number;

  @IsDate()
  @ApiProperty()
  timestamp: Date;
}
