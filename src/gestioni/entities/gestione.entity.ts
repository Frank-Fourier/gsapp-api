// src/gestioni/entities/gestione.entity.ts
import { Gestione, TipologiaGestione } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';
import { MovimentoEntity } from 'src/movimenti/entities/movimento.entity';
import { EstrattoContoEntity } from 'src/estrattiConto/entities/estratto-conto.entity';
import { PreventivoEntity } from 'src/preventivi/entities/preventivo.entity';
import { TransazioneEntity } from 'src/transazioni/entities/transazione.entity';

export class GestioneEntity implements Gestione {
  @ApiProperty()
  id: number;

  @ApiProperty({ required: false })
  gestionePrecedenteId: number;

  @ApiProperty({ enum: TipologiaGestione })
  tipologia: TipologiaGestione;

  @ApiProperty({ type: String, format: 'date-time' })
  dataInizioGestione: Date;

  @ApiProperty({ type: String, format: 'date-time', required: false })
  dataFineGestione: Date;

  @ApiProperty()
  denominazione: string;

  @ApiProperty({ required: false })
  descrizione: string;

  @ApiProperty({ required: false })
  note: string;

  @ApiProperty()
  condominioId: number;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  constructor(partial: Partial<GestioneEntity>) {
    Object.assign(this, partial);
  }
}

export class GestioneWithRelationsEntity extends GestioneEntity {
  @ApiProperty({ type: () => [MovimentoEntity] })
  movimenti: MovimentoEntity[];

  @ApiProperty({ type: () => [EstrattoContoEntity] })
  estrattiConto: EstrattoContoEntity[];

  @ApiProperty({ type: () => [PreventivoEntity] })
  preventivi: PreventivoEntity[];

  @ApiProperty({ type: () => [TransazioneEntity] })
  transazioni: TransazioneEntity[];

  constructor(partial: Partial<GestioneWithRelationsEntity>) {
    super(partial);
    Object.assign(this, partial);
  }
}
