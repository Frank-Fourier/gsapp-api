import { Module } from '@nestjs/common';
import { ProfiliAmministratoreService } from './profili-amministratore.service';
import { ProfiliAmministratoreController } from './profili-amministratore.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [ProfiliAmministratoreController],
  providers: [ProfiliAmministratoreService, PrismaService],
})
export class ProfiliAmministratoreModule {}
