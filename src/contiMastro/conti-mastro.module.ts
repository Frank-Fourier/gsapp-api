// src/conti-mastro/conti-mastro.module.ts
import { Module } from '@nestjs/common';
import { ContiMastroService } from './conti-mastro.service';
import { ContiMastroController } from './conti-mastro.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [ContiMastroController],
  providers: [ContiMastroService],
})
export class ContiMastroModule {}
