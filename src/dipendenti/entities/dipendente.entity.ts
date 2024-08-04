// src/dipendenti/entities/dipendente.entity.ts
import { Dipendente, CausaliSomme } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class DipendenteEntity implements Dipendente {
  @ApiProperty()
  id: number;

  @ApiProperty()
  email: string;

  @ApiProperty()
  emailPec: string;

  @ApiProperty()
  nome: string;

  @ApiProperty()
  cognome: string;

  @ApiProperty()
  codiceFiscale: string;

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

  @ApiProperty()
  nomeBanca: string;

  @ApiProperty()
  iban: string;

  @ApiProperty({ enum: CausaliSomme })
  causaliSommeErogate: CausaliSomme;

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

  constructor(partial: Partial<DipendenteEntity>) {
    Object.assign(this, partial);
  }
}
