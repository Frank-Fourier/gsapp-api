// src/dati-patrimoniali-iniziali/dati-patrimoniali-iniziali.module.ts
import { Module } from '@nestjs/common';
import { DatiPatrimonialiInizialiService } from './dati-patrimoniali-iniziali.service';
import { DatiPatrimonialiInizialiController } from './dati-patrimoniali-iniziali.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [DatiPatrimonialiInizialiController],
  providers: [DatiPatrimonialiInizialiService],
})
export class DatiPatrimonialiInizialiModule {}
