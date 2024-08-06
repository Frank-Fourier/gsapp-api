// src/preventivi/entities/preventivo.entity.ts
import { Preventivo } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';
import { GestioneEntity } from 'src/gestioni/entities/gestione.entity';
import { ContoMastroEntity } from 'src/contiMastro/entities/conto-mastro.entity';

export class PreventivoEntity implements Preventivo {
  @ApiProperty()
  id: number;

  @ApiProperty()
  gestioneId: number;

  @ApiProperty()
  contoMastroId: number;

  @ApiProperty()
  importo: number;

  @ApiProperty()
  numeroRate: number;

  @ApiProperty({ required: false })
  descrizione: string;

  @ApiProperty({ required: false })
  note: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  constructor(partial: Partial<PreventivoEntity>) {
    Object.assign(this, partial);
  }
}

export class PreventivoWithRelationsEntity extends PreventivoEntity {
  @ApiProperty({ type: () => GestioneEntity })
  gestione: GestioneEntity;

  @ApiProperty({ type: () => ContoMastroEntity })
  contoMastro: ContoMastroEntity;

  constructor(partial: Partial<PreventivoWithRelationsEntity>) {
    super(partial);
    Object.assign(this, partial);
  }
}
