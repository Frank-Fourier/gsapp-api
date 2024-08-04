// src/tabelle/tabelle.module.ts
import { Module } from '@nestjs/common';
import { TabelleService } from './tabelle.service';
import { TabelleController } from './tabelle.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [TabelleController],
  providers: [TabelleService],
})
export class TabelleModule {}
