// src/transazione/transazione.module.ts
import { Module } from '@nestjs/common';
import { TransazioniService } from './transazioni.service';
import { TransazioniController } from './transazioni.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [TransazioniController],
  providers: [TransazioniService],
})
export class TransazioniModule {}
