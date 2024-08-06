// src/estratti-conto/estratti-conto.module.ts
import { Module } from '@nestjs/common';
import { EstrattiContoService } from './estratti-conto.service';
import { EstrattiContoController } from './estratti-conto.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [EstrattiContoController],
  providers: [EstrattiContoService],
  imports: [PrismaModule],
})
export class EstrattiContoModule {}
