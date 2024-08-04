// src/anagrafiche/entities/anagrafica.entity.ts
import { Anagrafica, TipologiaAnagrafica } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class AnagraficaEntity implements Anagrafica {
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
  ragioneSociale: string;

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

  constructor(partial: Partial<AnagraficaEntity>) {
    Object.assign(this, partial);
  }
}
