// src/dati-patrimoniali-iniziali/entities/dati-patrimoniali-iniziali.entity.ts
import { DatiPatrimonialiIniziali } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class DatiPatrimonialiInizialiEntity implements DatiPatrimonialiIniziali {
  @ApiProperty()
  id: number;

  @ApiProperty({ type: [Number] })
  debitiUnitaImmobiliari: number[];

  @ApiProperty({ type: [String] })
  debitiDettaglio: string[];

  @ApiProperty({ type: [Number] })
  creditiUnitaImmobiliari: number[];

  @ApiProperty({ type: [String] })
  dettaglioUnitaImmobiliare: string[];

  @ApiProperty({ type: [Number] })
  debitiFornitori: number[];

  @ApiProperty({ type: [String] })
  dettaglioFornitori: string[];

  @ApiProperty({ type: [Number] })
  fornitoriCrediti: number[];

  @ApiProperty({ type: [String] })
  dettaglioFornitoriCrediti: string[];

  @ApiProperty({ type: [String] })
  risorseGestione: string[];

  @ApiProperty({ type: [Number] })
  saldoRisorse: number[];

  @ApiProperty({ type: [String] })
  fondiGestione: string[];

  @ApiProperty({ type: [Number] })
  consistenzaFondo: number[];

  @ApiProperty()
  descrizione: string;

  @ApiProperty()
  condominioId: number;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  constructor(partial: Partial<DatiPatrimonialiInizialiEntity>) {
    Object.assign(this, partial);
  }
}
