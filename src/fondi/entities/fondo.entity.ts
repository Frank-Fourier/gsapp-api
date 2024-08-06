// src/fondo/entities/fondo.entity.ts
import { Fondo, TipologiaFondo } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';
import { TransazioneEntity } from '../../transazioni/entities/transazione.entity';  // Adjust the import path as necessary
import { EstrattoContoEntity } from '../../estrattiConto/entities/estratto-conto.entity';  // Adjust the import path as necessary


export class FondoEntity implements Fondo {
  @ApiProperty()
  id: number;

  @ApiProperty()
  saldo: number;

  @ApiProperty({ enum: TipologiaFondo })
  tipologia: TipologiaFondo;

  @ApiProperty()
  denominazione: string;

  @ApiProperty({ required: false })
  descrizione: string;

  @ApiProperty({ required: false })
  note: string;

  @ApiProperty({ type: String, format: 'date-time', required: false })
  dataArchiviazione: Date;

  @ApiProperty()
  condominioId: number;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  constructor(partial: Partial<FondoEntity>) {
    Object.assign(this, partial);
  }
}

export class FondoWithTransazioniEntity extends FondoEntity {
  @ApiProperty({ type: () => [TransazioneEntity] })
  transazioni: TransazioneEntity[];

  constructor(partial: Partial<FondoWithTransazioniEntity>) {
    super(partial);
    Object.assign(this, partial);
  }
}

export class FondoWithDetailsEntity extends FondoEntity {
  @ApiProperty({ type: () => [TransazioneEntity] })
  transazioni: TransazioneEntity[];

  @ApiProperty({ type: () => [EstrattoContoEntity] })
  estrattiConto: EstrattoContoEntity[];

  constructor(partial: Partial<FondoWithDetailsEntity>) {
    super(partial);
    Object.assign(this, partial);
  }
}
