// src/movimenti/entities/movimento.entity.ts
import { Movimento, TipologiaMovimento } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';
import { TransazioneEntity } from 'src/transazioni/entities/transazione.entity';

export class MovimentoEntity implements Movimento {
  @ApiProperty()
  id: number;

  @ApiProperty({ enum: TipologiaMovimento })
  tipologia: TipologiaMovimento;

  @ApiProperty({ type: String, format: 'date-time' })
  dataScadenza: Date;

  @ApiProperty({ type: String, format: 'date-time' })
  dataEmissione: Date;

  @ApiProperty({ type: String, format: 'date-time', required: false })
  dataPagamento: Date;

  @ApiProperty({ required: false })
  ritenuta: number;

  @ApiProperty()
  importo: number;

  @ApiProperty({ required: false })
  descrizione: string;

  @ApiProperty({ required: false })
  note: string;

  @ApiProperty({ required: false })
  risorsaId: number;

  @ApiProperty({ required: false })
  unitaImmobiliareId: number;

  @ApiProperty({ required: false })
  fornitoreId: number;

  @ApiProperty({ required: false })
  dipendenteId: number;

  @ApiProperty({ required: false })
  gestioneId: number;

  @ApiProperty()
  condominioId: number;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  constructor(partial: Partial<MovimentoEntity>) {
    Object.assign(this, partial);
  }
}

export class MovimentoWithTransazioniEntity extends MovimentoEntity {
  @ApiProperty({ type: () => [TransazioneEntity] })
  transazione: TransazioneEntity[];

  constructor(partial: Partial<MovimentoWithTransazioniEntity>) {
    super(partial);
    Object.assign(this, partial);
  }
}
