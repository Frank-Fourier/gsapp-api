// src/tabelle/entities/tabella.entity.ts
import { Tabella } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class TabellaEntity implements Tabella {
  @ApiProperty()
  id: number;

  @ApiProperty()
  denominazione: string;

  @ApiProperty()
  totaleMillesimi: number;

  @ApiProperty({ type: [String] })
  ripartizioneMillesimi: string[];

  @ApiProperty({ type: [String] })
  percentualeNudaProprieta: string[];

  @ApiProperty({ type: [String] })
  percentualeUsufrutto: string[];

  @ApiProperty({ type: [String] })
  percentualeProprieta: string[];

  @ApiProperty({ type: [String] })
  percentualeConduttore: string[];

  @ApiProperty()
  descrizione: string;

  @ApiProperty()
  condominioId: number;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty()
  createdAt: Date;

  constructor(partial: Partial<TabellaEntity>) {
    Object.assign(this, partial);
  }
}
