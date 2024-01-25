import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { StrategiesModule } from './strategies/strategies.module';
import { Web3Module } from './web3/web3.module';
import { BinanceModule } from './cex/binance.module';
import { KpiCalculatorModule } from './kpi-calculator/kpi-calculator.module';
import { ScheduleModule } from '@nestjs/schedule';
import { TelegramModule } from './telegram/telegram.module';

@Module({
  imports: [
    PrismaModule,
    UsersModule,
    AuthModule,
    StrategiesModule,
    Web3Module,
    BinanceModule,
    KpiCalculatorModule,
    ScheduleModule.forRoot(),
    TelegramModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
