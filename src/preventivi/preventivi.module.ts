// src/preventivi/preventivi.module.ts
import { Module } from '@nestjs/common';
import { PreventiviService } from './preventivi.service';
import { PreventiviController } from './preventivi.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [PreventiviController],
  providers: [PreventiviService],
  imports: [PrismaModule],
})
export class PreventiviModule {}
