import { ProfiloAmministratore } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class ProfiloAmministratoreEntity implements ProfiloAmministratore {
  @ApiProperty()
  id: number;

  @ApiProperty()
  nome: string;

  @ApiProperty()
  cognome: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;

  @ApiProperty({ type: [String] })
  documenti: string[];

  @ApiProperty({ type: [String] })
  allegati: string[];

  @ApiProperty()
  logo: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  constructor(partial: Partial<ProfiloAmministratoreEntity>) {
    Object.assign(this, partial);
  }
}
