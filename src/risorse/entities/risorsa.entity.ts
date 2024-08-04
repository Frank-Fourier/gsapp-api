// src/risorsa/entities/risorsa.entity.ts
import { Risorsa } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class RisorsaEntity implements Risorsa {
  @ApiProperty()
  id: number;

  @ApiProperty()
  saldo: number;

  @ApiProperty()
  denominazione: string;

  @ApiProperty()
  descrizione: string;

  @ApiProperty()
  istitutoCredito: string;

  @ApiProperty({ required: false })
  agenzia: string;

  @ApiProperty({ required: false })
  iban: string;

  @ApiProperty({ required: false })
  codiceBIC: string;

  @ApiProperty({ required: false })
  note: string;

  @ApiProperty()
  condominioId: number;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  constructor(partial: Partial<RisorsaEntity>) {
    Object.assign(this, partial);
  }
}
