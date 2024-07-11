import { Anagrafica, TipologiaAnagrafica } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class AnagraficaEntity implements Anagrafica {
  @ApiProperty()
  id: number;

  @ApiProperty({ enum: TipologiaAnagrafica })
  tipologia: TipologiaAnagrafica;

  @ApiProperty()
  email: string;

  @ApiProperty()
  emailPec: string;

  @ApiProperty()
  denominazione: string;

  @ApiProperty()
  responsabile: string;

  @ApiProperty()
  codiceFiscale: string;

  @ApiProperty()
  partitaIva: string;

  @ApiProperty()
  nazione: string;

  @ApiProperty()
  comune: string;

  @ApiProperty()
  indirizzo: string;

  @ApiProperty()
  telefono: string;

  @ApiProperty()
  cellulare: string;

  @ApiProperty()
  note: string;

  @ApiProperty()
  autorizzazione: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  constructor(partial: Partial<AnagraficaEntity>) {
    Object.assign(this, partial);
  }
}
