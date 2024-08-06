// src/conto-mastro/entities/conto-mastro.entity.ts
import { ContoMastro } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';
import { PreventivoEntity } from 'src/preventivi/entities/preventivo.entity';

export class ContoMastroEntity implements ContoMastro {
  @ApiProperty()
  id: number;

  @ApiProperty()
  denominazione: string;

  @ApiProperty({ required: false })
  descrizione: string;

  @ApiProperty({ required: false })
  note: string;

  @ApiProperty()
  tabellaId: number;

  @ApiProperty({ type: [String] })
  conti: string[];

  @ApiProperty({ type: String, format: 'date-time', required: false })
  dataArchiviazione: Date;

  @ApiProperty()
  condominioId: number;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  constructor(partial: Partial<ContoMastroEntity>) {
    Object.assign(this, partial);
  }
}

export class ContoMastroWithDetailsEntity extends ContoMastroEntity {
  @ApiProperty({ type: () => [PreventivoEntity] })
  preventivi: PreventivoEntity[];

  constructor(partial: Partial<ContoMastroWithDetailsEntity>) {
    super(partial);
    Object.assign(this, partial);
  }
}
