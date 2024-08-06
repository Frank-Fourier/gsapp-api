// src/movimenti/movimenti.module.ts
import { Module } from '@nestjs/common';
import { MovimentiService } from './movimenti.service';
import { MovimentiController } from './movimenti.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [MovimentiController],
  providers: [MovimentiService],
  imports: [PrismaModule],
})
export class MovimentiModule {}
