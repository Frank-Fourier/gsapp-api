// src/unita-immobiliari/unita-immobiliari.module.ts
import { Module } from '@nestjs/common';
import { UnitaImmobiliariService } from './unita-immobiliari.service';
import { UnitaImmobiliariController } from './unita-immobiliari.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [UnitaImmobiliariController],
  providers: [UnitaImmobiliariService],
})
export class UnitaImmobiliariModule {}
