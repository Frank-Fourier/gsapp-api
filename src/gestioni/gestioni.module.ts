// src/gestioni/gestioni.module.ts
import { Module } from '@nestjs/common';
import { GestioniService } from './gestioni.service';
import { GestioniController } from './gestioni.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [GestioniController],
  providers: [GestioniService],
  imports: [PrismaModule],
})
export class GestioniModule {}
