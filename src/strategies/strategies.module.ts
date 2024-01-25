import { Module } from '@nestjs/common';
import { StrategiesService } from './strategies.service';
import { StrategiesController } from './strategies.controller';
import { KpiCalculatorModule } from '../kpi-calculator/kpi-calculator.module';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [StrategiesController],
  providers: [StrategiesService],
  imports: [PrismaModule, KpiCalculatorModule],
})
export class StrategiesModule {}
