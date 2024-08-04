// src/risorsa/risorsa.module.ts
import { Module } from '@nestjs/common';
import { RisorseService } from './risorse.service';
import { RisorseController } from './risorse.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [RisorseController],
  providers: [RisorseService],
})
export class RisorseModule {}
