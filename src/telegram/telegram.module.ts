// src/telegram/telegram.module.ts

import { Module } from '@nestjs/common';
import { TelegramService } from './telegram.service';
import { ConfigModule } from '@nestjs/config';
import { ApiModule } from '../services/api.module';

@Module({
  imports: [ConfigModule, ApiModule],
  providers: [TelegramService],
  exports: [TelegramService],
})
export class TelegramModule {}
