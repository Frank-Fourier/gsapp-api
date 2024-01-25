import { Module } from '@nestjs/common';
import { KpiCalculatorService } from './kpi-calculator.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { Web3Module } from '../web3/web3.module';
import { BinanceModule } from '../cex/binance.module';
import { TelegramModule } from '../telegram/telegram.module';

@Module({
  imports: [Web3Module, BinanceModule, TelegramModule],
  providers: [KpiCalculatorService, PrismaService],
  exports: [KpiCalculatorService],
})
export class KpiCalculatorModule {}
