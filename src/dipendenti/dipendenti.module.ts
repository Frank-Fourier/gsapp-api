// src/dipendenti/dipendenti.module.ts
import { Module } from '@nestjs/common';
import { DipendentiService } from './dipendenti.service';
import { DipendentiController } from './dipendenti.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [DipendentiController],
  providers: [DipendentiService],
  imports: [PrismaModule],
})
export class DipendentiModule {}
