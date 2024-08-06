// src/risorsa/entities/risorsa.entity.ts
import { Risorsa } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';
import { TransazioneEntity } from '../../transazioni/entities/transazione.entity';  // Adjust the import path as necessary
import { EstrattoContoEntity } from '../../estrattiConto/entities/estratto-conto.entity';  // Adjust the import path as necessary

export class RisorsaEntity implements Risorsa {
  @ApiProperty()
  id: number;

  @ApiProperty()
  saldo: number;

  @ApiProperty()
  denominazione: string;

  @ApiProperty({ required: false })
  descrizione: string;

  @ApiProperty()
  istitutoCredito: string;

  @ApiProperty({ required: false })
  agenzia: string;

  @ApiProperty({ required: false })
  iban: string;

  @ApiProperty({ required: false })
  codiceBIC: string;

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

  constructor(partial: Partial<RisorsaEntity>) {
    Object.assign(this, partial);
  }
}

export class RisorsaWithTransazioniEntity extends RisorsaEntity {
  @ApiProperty({ type: () => [TransazioneEntity] })
  transazioni: TransazioneEntity[];

  constructor(partial: Partial<RisorsaWithTransazioniEntity>) {
    super(partial);
    Object.assign(this, partial);
  }
}

export class RisorsaWithDetailsEntity extends RisorsaEntity {
  @ApiProperty({ type: () => [TransazioneEntity] })
  transazioni: TransazioneEntity[];

  @ApiProperty({ type: () => [EstrattoContoEntity] })
  estrattiConto: EstrattoContoEntity[];

  constructor(partial: Partial<RisorsaWithDetailsEntity>) {
    super(partial);
    Object.assign(this, partial);
  }
}
