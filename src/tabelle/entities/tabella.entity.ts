// src/tabelle/entities/tabella.entity.ts
import { Tabella } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';
import { ContoMastroEntity } from 'src/contiMastro/entities/conto-mastro.entity';

export class TabellaEntity implements Tabella {
  @ApiProperty()
  id: number;

  @ApiProperty()
  denominazione: string;

  @ApiProperty()
  totaleMillesimi: number;

  @ApiProperty({ type: [Number] })
  ripartizioneMillesimi: number[];

  @ApiProperty({ type: [String] })
  percentualeNudaProprieta: string[];

  @ApiProperty({ type: [String] })
  percentualeUsufrutto: string[];

  @ApiProperty({ type: [String] })
  percentualeProprieta: string[];

  @ApiProperty({ type: [String] })
  percentualeConduttore: string[];

  @ApiProperty({ type: String, format: 'date-time', required: false })
  dataArchiviazione: Date;

  @ApiProperty({ required: false })
  descrizione: string;

  @ApiProperty({ required: false })
  note: string;

  @ApiProperty()
  condominioId: number;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty()
  createdAt: Date;

  constructor(partial: Partial<TabellaEntity>) {
    Object.assign(this, partial);
  }
}

export class TabellaWithRelationsEntity extends TabellaEntity {
  @ApiProperty({ type: () => [ContoMastroEntity] })
  contiMastro: ContoMastroEntity[];

  constructor(partial: Partial<TabellaWithRelationsEntity>) {
    super(partial);
    Object.assign(this, partial);
  }
}
