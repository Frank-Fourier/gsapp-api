// src/fondo/entities/fondo.entity.ts
import { Fondo, TipologiaFondo } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class FondoEntity implements Fondo {
  @ApiProperty()
  id: number;

  @ApiProperty()
  saldo: number;

  @ApiProperty({ enum: TipologiaFondo })
  tipologia: TipologiaFondo;

  @ApiProperty()
  denominazione: string;

  @ApiProperty()
  descrizione: string;

  @ApiProperty()
  condominioId: number;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  constructor(partial: Partial<FondoEntity>) {
    Object.assign(this, partial);
  }
}
