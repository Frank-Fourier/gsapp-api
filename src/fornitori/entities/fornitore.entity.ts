// src/fornitori/entities/fornitore.entity.ts
import { Fornitore, TipologiaAnagrafica, TipologiaCassa, TipologiaIVA, TipologiaRitenuta, CausaliSomme } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class FornitoreEntity implements Fornitore {
  @ApiProperty()
  id: number;

  @ApiProperty()
  email: string;

  @ApiProperty()
  emailPec: string;

  @ApiProperty({ enum: TipologiaAnagrafica })
  tipologia: TipologiaAnagrafica;

  @ApiProperty()
  nome: string;

  @ApiProperty({ required: false })
  cognome: string;

  @ApiProperty({ required: false })
  ragioneSociale: string; // se societa

  @ApiProperty({ required: false })
  responsabile: string;

  @ApiProperty()
  codiceFiscale: string;

  @ApiProperty({ required: false })
  partitaIva: string;

  @ApiProperty()
  nazioneResidenza: string;

  @ApiProperty()
  comuneResidenza: string;

  @ApiProperty()
  indirizzoResidenza: string;

  @ApiProperty()
  capResidenza: string;

  @ApiProperty()
  nazioneDomicilio: string;

  @ApiProperty()
  comuneDomicilio: string;

  @ApiProperty()
  indirizzoDomicilio: string;

  @ApiProperty()
  capDomicilio: string;

  @ApiProperty()
  nazioneSedeLegale: string;

  @ApiProperty()
  comuneSedeLegale: string;

  @ApiProperty()
  indirizzoSedeLegale: string;

  @ApiProperty()
  capSedeLegale: string;

  @ApiProperty({ type: String, format: 'date-time' })
  dataNascita: Date;

  @ApiProperty()
  luogoNascita: string;

  @ApiProperty()
  telefono: string;

  @ApiProperty({ required: false })
  cellulare: string;

  @ApiProperty({ required: false })
  note: string;

  @ApiProperty()
  nomeBanca: string;

  @ApiProperty()
  iban: string;

  @ApiProperty({ enum: TipologiaCassa })
  cassaPrevidenza: TipologiaCassa;

  @ApiProperty({ required: false })
  inps: string;

  @ApiProperty({ enum: TipologiaIVA, required: false })
  iva1: TipologiaIVA;

  @ApiProperty({ enum: TipologiaIVA, required: false })
  iva2: TipologiaIVA;

  @ApiProperty({ enum: TipologiaIVA, required: false })
  iva3: TipologiaIVA;

  @ApiProperty({ enum: TipologiaRitenuta })
  tipoRitenuta: TipologiaRitenuta;

  @ApiProperty({ enum: CausaliSomme })
  causaliSommeErogate: CausaliSomme;

  @ApiProperty({ required: false })
  cciaa: string;

  @ApiProperty({ required: false })
  inail: string;

  @ApiProperty({ required: false })
  albo: string;

  @ApiProperty({ type: [String], required: false })
  documenti: string[];

  @ApiProperty({ type: [String], required: false })
  allegati: string[];

  @ApiProperty()
  amministratoreId: number;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  constructor(partial: Partial<FornitoreEntity>) {
    Object.assign(this, partial);
  }
}
