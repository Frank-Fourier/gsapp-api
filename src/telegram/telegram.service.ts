// src/telegram/telegram.service.ts

import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ApiService } from '../services/api.service';

@Injectable()
export class TelegramService {
  private readonly telegramApiUrl = 'https://api.telegram.org/bot';

  constructor(
    private apiService: ApiService,
    private configService: ConfigService,
  ) {}

  async sendMessage(chatId: string, message: string): Promise<void> {
    const url = `${this.telegramApiUrl}${this.configService.get(
      'TELEGRAM_BOT_TOKEN',
    )}/sendMessage`;
    const http = this.apiService.createRateLimitedAxiosInstance(10, 1000); // Example rate limit settings

    try {
      await this.apiService.makeRequest(http, url, {
        method: 'POST',
        data: {
          chat_id: chatId,
          text: message,
        },
      });
    } catch (error) {
      console.error('Error sending message to Telegram:', error);
      throw error;
    }
  }
}
