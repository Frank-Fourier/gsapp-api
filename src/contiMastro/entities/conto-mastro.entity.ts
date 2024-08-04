// src/conto-mastro/entities/conto-mastro.entity.ts
import { ContoMastro } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class ContoMastroEntity implements ContoMastro {
  @ApiProperty()
  id: number;

  @ApiProperty()
  descrizione: string;

  @ApiProperty()
  note: string;

  @ApiProperty()
  tabellaId: number;

  @ApiProperty({ type: [String] })
  conti: string[];

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
