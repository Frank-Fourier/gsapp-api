// src/transazione/entities/transazione.entity.ts
import { Transazione } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class TransazioneEntity implements Transazione {
  @ApiProperty()
  id: number;

  @ApiProperty({ type: String, format: 'date-time' })
  data: Date;

  @ApiProperty()
  importo: number;

  @ApiProperty({ required: false })
  descrizione: string;

  @ApiProperty({ required: false })
  note: string;

  @ApiProperty({ required: false })
  riferimento: string;

  @ApiProperty({ required: false })
  provenienzaFornitore: string;

  @ApiProperty({ required: false })
  provenienzaAnagrafica: string;

  @ApiProperty({ required: false })
  destinazioneFornitore: string;

  @ApiProperty({ required: false })
  destinazioneAnagrafica: string;

  @ApiProperty({ required: false })
  gestioneId: number;

  @ApiProperty()
  condominioId: number;

  @ApiProperty({ required: false })
  unitaImmobiliareId: number;

  @ApiProperty()
  risorsaId: number;

  @ApiProperty({ required: false })
  fondoId: number;

  @ApiProperty({ required: false })
  movimentoId: number;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  constructor(partial: Partial<TransazioneEntity>) {
    Object.assign(this, partial);
  }
}
