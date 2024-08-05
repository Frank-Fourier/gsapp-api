// src/condomini/entities/condominio.entity.ts
import { Condominio, TipologiaCondominio } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';
import { DatiPatrimonialiInizialiEntity } from 'src/datiPatrimoniali/entities/dati-patrimoniali-iniziali.entity';
import { UnitaImmobiliareEntity } from 'src/unitaImmobiliari/entities/unita-immobiliare.entity';
import { TabellaEntity } from 'src/tabelle/entities/tabella.entity';
import { ContoMastroEntity } from 'src/contiMastro/entities/conto-mastro.entity';
import { RisorsaEntity } from 'src/risorse/entities/risorsa.entity';
import { FondoEntity } from 'src/fondi/entities/fondo.entity';
import { TransazioneEntity } from 'src/transazioni/entities/transazione.entity';
//import { GestioneEntity } from 'src/gestioni/entities/gestione.entity';

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

export class CondominioWithRelationsEntity extends CondominioEntity {
  @ApiProperty({ type: () => DatiPatrimonialiInizialiEntity, required: false })
  datiPatrimonialiIniziali: DatiPatrimonialiInizialiEntity;

  @ApiProperty({ type: () => [UnitaImmobiliareEntity] })
  unitaImmobiliari: UnitaImmobiliareEntity[];

  @ApiProperty({ type: () => [TabellaEntity] })
  tabelle: TabellaEntity[];

  @ApiProperty({ type: () => [ContoMastroEntity] })
  contiMastro: ContoMastroEntity[];

  @ApiProperty({ type: () => [RisorsaEntity] })
  risorse: RisorsaEntity[];

  @ApiProperty({ type: () => [FondoEntity] })
  fondi: FondoEntity[];

  @ApiProperty({ type: () => [TransazioneEntity] })
  transazioni: TransazioneEntity[];

  /*@ApiProperty({ type: () => [GestioneEntity] })
  gestioni: GestioneEntity[];*/

  constructor(partial: Partial<CondominioWithRelationsEntity>) {
    super(partial);
    Object.assign(this, partial);
  }
}
