// src/estratti-conto/entities/estratto-conto.entity.ts
import { EstrattoConto } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class EstrattoContoEntity implements EstrattoConto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  saldo: number;

  @ApiProperty()
  denominazione: string;

  @ApiProperty({ required: false })
  descrizione: string;

  @ApiProperty({ required: false })
  note: string;

  @ApiProperty({ type: [String] })
  transazioni: string[];

  @ApiProperty({ required: false })
  risorsaId: number;

  @ApiProperty({ required: false })
  fondoId: number;

  @ApiProperty()
  gestioneId: number;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  constructor(partial: Partial<EstrattoContoEntity>) {
    Object.assign(this, partial);
  }
}
