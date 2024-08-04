// src/fondo/fondo.module.ts
import { Module } from '@nestjs/common';
import { FondiService } from './fondi.service';
import { FondiController } from './fondi.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [FondiController],
  providers: [FondiService],
})
export class FondiModule {}
