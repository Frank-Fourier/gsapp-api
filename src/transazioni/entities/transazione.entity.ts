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

  @ApiProperty()
  riferimento: string;

  @ApiProperty()
  provenienzaFornitore: string;

  @ApiProperty()
  provenienzaAnagrafica: string;

  @ApiProperty()
  destinazioneFornitore: string;

  @ApiProperty()
  destinazioneAnagrafica: string;

  @ApiProperty()
  condominioId: number;

  @ApiProperty({ required: false })
  unitaImmobiliareId: number;

  @ApiProperty()
  risorsaId: number;

  @ApiProperty({ required: false })
  fondoId: number;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  constructor(partial: Partial<TransazioneEntity>) {
    Object.assign(this, partial);
  }
}
