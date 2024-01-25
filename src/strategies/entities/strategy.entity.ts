// src/strategies/entities/strategy.entity.ts

import { Strategy } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';
import { SnapshotEntity } from './snapshot.entity';

export class StrategyEntity implements Strategy {
  @ApiProperty()
  id: number;

  @ApiProperty()
  title: string;

  @ApiProperty({ required: false, nullable: true })
  description: string | null;

  @ApiProperty()
  initialVPS: number;

  @ApiProperty()
  initialTime: Date;

  @ApiProperty({ type: [String] })
  dexPairs: string[];

  @ApiProperty({ type: [String] })
  dexAccounts: string[];

  @ApiProperty({ type: [String] })
  cexAccounts: string[];

  @ApiProperty({ type: [String] })
  symbols: string[];

  @ApiProperty({ type: [String] })
  poolAddresses: string[];

  @ApiProperty()
  sharesAddress: string | null;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty({ type: [SnapshotEntity], isArray: true })
  snapshots?: SnapshotEntity[];

  constructor(partial: Partial<StrategyEntity>) {
    Object.assign(this, partial);
  }
}
