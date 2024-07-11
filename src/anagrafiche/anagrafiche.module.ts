import { Module } from '@nestjs/common';
import { AnagraficheService } from './anagrafiche.service';
import { AnagraficheController } from './anagrafiche.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [AnagraficheController],
  providers: [AnagraficheService],
  imports: [PrismaModule],
})
export class AnagraficheModule {}
