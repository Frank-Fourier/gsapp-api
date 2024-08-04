// src/condomini/entities/condominio.entity.ts
import { Condominio, TipologiaCondominio } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class CondominioEntity implements Condominio {
  @ApiProperty()
  id: number;

  @ApiProperty({ required: false })
  codice: string;

  @ApiProperty({ enum: TipologiaCondominio })
  tipologia: TipologiaCondominio;

  @ApiProperty()
  denominazione: string;

  @ApiProperty()
  codiceFiscale: string;

  @ApiProperty()
  comune: string;

  @ApiProperty()
  indirizzo: string;

  @ApiProperty()
  cap: string;

  @ApiProperty({ required: false })
  sezioneUrbana: string;

  @ApiProperty()
  foglio: number;

  @ApiProperty()
  particella: number;

  @ApiProperty({ required: false })
  totalSuperficie: number;

  @ApiProperty({ required: false })
  totaleUnita: number;

  @ApiProperty({ required: false })
  totaleVani: number;

  @ApiProperty()
  posizioneINPS: string;

  @ApiProperty()
  posizioneINAIL: string;

  @ApiProperty({ required: false })
  luogoAssemblea1: string;

  @ApiProperty({ required: false })
  luogoAssemblea2: string;

  @ApiProperty()
  decimaliMillesimi: number;

  @ApiProperty({ required: false })
  descrizione: string;

  @ApiProperty({ type: [String], required: false })
  allegati: string[];

  @ApiProperty({ type: String, format: 'date-time' })
  dataPresaInCarico: Date;

  @ApiProperty()
  amministratoreId: number;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  constructor(partial: Partial<CondominioEntity>) {
    Object.assign(this, partial);
  }
}
