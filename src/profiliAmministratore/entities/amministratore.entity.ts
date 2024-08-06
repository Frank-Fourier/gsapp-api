import { ProfiloAmministratore } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';
import { AnagraficaEntity } from 'src/anagrafiche/entities/anagrafica.entity';
import { CondominioEntity } from 'src/condomini/entities/condominio.entity';
import { DipendenteEntity } from 'src/dipendenti/entities/dipendente.entity';
import { FornitoreEntity } from 'src/fornitori/entities/fornitore.entity';

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
  stato: boolean;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  constructor(partial: Partial<ProfiloAmministratoreEntity>) {
    Object.assign(this, partial);
  }
}

export class ProfiloAmministratoreWithRelationsEntity extends ProfiloAmministratoreEntity {
  @ApiProperty({ type: () => [AnagraficaEntity] })
  anagrafiche: AnagraficaEntity[];

  @ApiProperty({ type: () => [FornitoreEntity] })
  fornitori: FornitoreEntity[];

  @ApiProperty({ type: () => [DipendenteEntity] })
  dipendenti: DipendenteEntity[];

  @ApiProperty({ type: () => [CondominioEntity] })
  condomini: CondominioEntity[];

  constructor(partial: Partial<ProfiloAmministratoreWithRelationsEntity>) {
    super(partial);
    Object.assign(this, partial);
  }
}
