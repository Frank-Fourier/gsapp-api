// src/fornitori/fornitori.module.ts
import { Module } from '@nestjs/common';
import { FornitoriService } from './fornitori.service';
import { FornitoriController } from './fornitori.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [FornitoriController],
  providers: [FornitoriService],
  imports: [PrismaModule],
})
export class FornitoriModule {}
