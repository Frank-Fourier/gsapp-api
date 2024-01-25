// src/strategies/entities/snapshot.entity.ts

import { Snapshot } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class SnapshotEntity implements Snapshot {
  @ApiProperty()
  id: number;

  @ApiProperty()
  strategyId: number;

  @ApiProperty()
  VPS: number;

  @ApiProperty()
  APY: number;

  @ApiProperty()
  NAV: number;

  @ApiProperty()
  timestamp: Date;

  constructor(partial: Partial<SnapshotEntity>) {
    Object.assign(this, partial);
  }
}
