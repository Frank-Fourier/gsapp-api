// src/condomini/condomini.module.ts
import { Module } from '@nestjs/common';
import { CondominiService } from './condomini.service';
import { CondominiController } from './condomini.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [CondominiController],
  providers: [CondominiService],
  imports: [PrismaModule],
})
export class CondominiModule {}
