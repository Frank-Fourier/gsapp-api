import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { USDMClient /*, MainClient */ } from 'binance';

@Injectable()
export class BinanceService {
  private clients: Record<string, USDMClient> = {};
  private client: USDMClient;

  constructor(private configService: ConfigService) {}

  private getMainClient(): USDMClient {
    if (!this.client) {
      this.client = new USDMClient();
    }

    return this.client;
  }

  private getUSDMClient(subaccountId: string): USDMClient {
    if (!this.clients[subaccountId]) {
      const apiKey = this.configService.get(`${subaccountId}_API`);
      const apiSecret = this.configService.get(`${subaccountId}_SECRET`);
      if (!apiKey || !apiSecret) {
        throw new Error(
          `API keys for subaccount ${subaccountId} are not defined.`,
        );
      }

      this.clients[subaccountId] = new USDMClient({
        api_key: apiKey,
        api_secret: apiSecret,
      });
    }

    return this.clients[subaccountId];
  }

  // Get Mark Price
  async getMarkPrice(symbol: string): Promise<number> {
    try {
      const client = this.getMainClient();
      const result = await client.getMarkPrice({ symbol });
      const markPrice = result ? result['markPrice'] : '0';
      return parseFloat(markPrice);
    } catch (error) {
      console.error(`Error fetching mark price for ${symbol}:`, error);
      throw error;
    }
  }

  // Metodo per ottenere il saldo del conto dei futures per un dato subaccount
  async getFuturesAccountBalance(subaccountId: string): Promise<number> {
    try {
      const client = this.getUSDMClient(subaccountId);
      const result = await client.getAccountInformation();
      const balance = result?.totalMarginBalance.toString() || '0';
      return parseFloat(balance);
    } catch (error) {
      console.error(
        `Error fetching futures account balance for subaccount ${subaccountId}:`,
        error,
      );
      throw error;
    }
  }
}

/*
async function testBinanceService() {
  const configService = new ConfigService({
    envFilePath: '.env',
  });

  const binanceService = new BinanceService(configService);

  try {
    const balance = await binanceService.getFuturesAccountBalance();
    console.log(balance);
  } catch (error) {
    console.error(error);
  }
}

testBinanceService();*/
