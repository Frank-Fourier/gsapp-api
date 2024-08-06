// src/unita-immobiliari/entities/unita-immobiliare.entity.ts
import { UnitaImmobiliare, TipologiaImmobile } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';
import { TransazioneEntity } from '../../transazioni/entities/transazione.entity';  // Adjust the import path as necessary

export class UnitaImmobiliareEntity implements UnitaImmobiliare {
  @ApiProperty()
  id: number;

  @ApiProperty({ enum: TipologiaImmobile })
  tipologia: TipologiaImmobile;

  @ApiProperty()
  subalterno: string;

  @ApiProperty()
  superficie: number;

  @ApiProperty()
  vani: number;

  @ApiProperty({ required: false })
  scala: string;

  @ApiProperty({ required: false })
  piano: string;

  @ApiProperty({ required: false })
  interno: string;

  @ApiProperty({ required: false })
  descrizione: string;

  @ApiProperty({ required: false })
  note: string;

  @ApiProperty({ type: [String], required: false })
  nudaProprietaAttiva: string[];

  @ApiProperty({ type: [String], required: false })
  usufruttoAttivo: string[];

  @ApiProperty({ type: [String], required: false })
  proprietarioAttivo: string[];

  @ApiProperty({ type: [String], required: false })
  nudaProprietaPrecedente: string[];

  @ApiProperty({ type: [String], required: false })
  usufruttoPrecendente: string[];

  @ApiProperty({ type: [String], required: false })
  proprietarioPrecedente: string[];

  @ApiProperty({ type: [String], required: false })
  conduttorePrecedente: string[];

  @ApiProperty({ type: String, format: 'date-time' })
  dataDiAttivazione: Date;

  @ApiProperty({ type: String, format: 'date-time', required: false })
  dataDiDisattivazione: Date;

  @ApiProperty()
  condominioId: number;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  constructor(partial: Partial<UnitaImmobiliareEntity>) {
    Object.assign(this, partial);
  }
}

export class UnitaImmobiliareWithTransazioniEntity extends UnitaImmobiliareEntity {
  @ApiProperty({ type: () => [TransazioneEntity] })
  transazioni: TransazioneEntity[];

  constructor(partial: Partial<UnitaImmobiliareWithTransazioniEntity>) {
    super(partial);
    Object.assign(this, partial);
  }
}
