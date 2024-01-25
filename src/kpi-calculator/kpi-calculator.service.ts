import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Web3Service } from '../web3/web3.service';
import { BinanceService } from '../cex/binance.service';
import { Cron } from '@nestjs/schedule';
import { TelegramService } from '../telegram/telegram.service';

@Injectable()
export class KpiCalculatorService {
  constructor(
    private prisma: PrismaService,
    private web3Service: Web3Service,
    private binanceService: BinanceService,
    private telegramService: TelegramService,
  ) {}

  private formatSnapshotMessage(
    snapshot: {
      id?: number;
      strategyId: any;
      VPS: any;
      APY: any;
      NAV: any;
      timestamp?: Date;
    },
    type: string,
  ): string {
    let color = '';
    if (type === 'DEX Price') {
      color = '🟢';
    } else if (type === 'Mark Price') {
      color = '🔵';
    }

    return `${color} Snapshot ${type} created:
  - VPS: ${snapshot.VPS.toFixed(4)}
  - APY: ${snapshot.APY.toFixed(2)}%
  - NAV: $${snapshot.NAV.toFixed(2)}`;
  }

  @Cron('5 * * * *')
  async handleCronAtFive() {
    await this.handleCron();
  }

  @Cron('35 * * * *')
  async handleCronAtThirtyFive() {
    await this.handleCron();
  }

  private async handleCron() {
    console.log('Starting the cron job for calculating snapshots');
    const strategyId = 20;
    const maxRetries = 5;

    try {
      const result0 = await this.retryCalculateSnapshot(
        strategyId,
        maxRetries,
        'DEX Price',
      );
      const result1 = await this.retryCalculateSnapshot(
        strategyId,
        maxRetries,
        'Mark Price',
      );

      const message0 = this.formatSnapshotMessage(result0, 'DEX Price');
      const message1 = this.formatSnapshotMessage(result1, 'Mark Price');

      await this.telegramService.sendMessage('-1001982801522', message0);
      await this.telegramService.sendMessage('-1001982801522', message1);

      console.log('Finished the cron job for calculating snapshots');
    } catch (error) {
      console.error(
        `Failed to calculate snapshot for strategy ${strategyId}: ${error}`,
      );
    }
  }

  async retryCalculateSnapshot(
    strategyId: number,
    maxRetries: number,
    type: string,
  ) {
    let retries = 0;
    while (retries < maxRetries) {
      try {
        const result =
          type === 'DEX Price'
            ? await this.calculateSnapshot(strategyId)
            : await this.calculateSnapshotMarkPrice(strategyId);
        if (result && result.VPS > 0) {
          return result;
        }
      } catch (error) {
        console.error(`Attempt ${retries + 1} failed: ${error}`);
      }
      await new Promise((resolve) => setTimeout(resolve, 1000));
      retries++;
    }
    throw new Error(
      `Failed to calculate snapshot after ${maxRetries} attempts`,
    );
  }

  async calculateNAV(
    lpTokenAddress: string,
    subaccountId: string,
    walletAddress: string,
  ): Promise<number> {
    // Create promises for both the pool value and collateral value
    const poolValuePromise = this.web3Service.getLPTokenValue(
      walletAddress,
      lpTokenAddress,
    );
    const collateralValuePromise =
      this.binanceService.getFuturesAccountBalance(subaccountId);
    // Resolve both promises concurrently
    const [poolValue, collateralValue] = await Promise.all([
      poolValuePromise,
      collateralValuePromise,
    ]);

    // NAV is the sum of pool value and collateral value
    return poolValue + collateralValue;
  }

  async calculateNAVMarkPrice(
    lpTokenAddress: string,
    subaccountId: string,
    walletAddress: string,
    symbol: string,
  ): Promise<number> {
    // Create promises for both the pool value and collateral value
    const poolQuantityPromise = this.web3Service.getLPTokenQuantity(
      walletAddress,
      lpTokenAddress,
    );
    const collateralValuePromise =
      this.binanceService.getFuturesAccountBalance(subaccountId);

    const symbolArray = symbol.split('/');
    const symbolBase = symbolArray[0];
    const symbolQuote = symbolArray[1];

    const markPricePromiseBase =
      symbolBase !== 'USDT'
        ? this.binanceService.getMarkPrice(symbolBase.toString() + 'USDT')
        : 1;
    const markPricePromiseQuote =
      symbolQuote !== 'USDT'
        ? this.binanceService.getMarkPrice(symbolQuote.toString() + 'USDT')
        : 1;

    const markPricePromises = [markPricePromiseBase, markPricePromiseQuote];

    // Resolve both promises concurrently
    const [markPrices, poolQuantity, collateralValue] = await Promise.all([
      Promise.all(markPricePromises),
      poolQuantityPromise,
      collateralValuePromise,
    ]);

    const lpTokenBaseValue = symbolBase.startsWith('1000')
      ? (poolQuantity.base * markPrices[0]) / 1000
      : poolQuantity.base * markPrices[0];
    const lpTokenQuoteValue = symbolQuote.startsWith('1000')
      ? (poolQuantity.quote * markPrices[1]) / 1000
      : poolQuantity.quote * markPrices[1];
    const poolValue = lpTokenBaseValue + lpTokenQuoteValue;

    // NAV is the sum of pool value and collateral value
    return poolValue + collateralValue;
  }

  async calculateSnapshot(strategyId: number, strategy = null) {
    if (!strategy) {
      strategy = await this.prisma.strategy.findUnique({
        where: { id: strategyId },
      });
    }

    if (!strategy) {
      throw new Error('Strategy not found');
    }

    if (
      strategy.poolAddresses.length !== strategy.cexAccounts.length ||
      strategy.poolAddresses.length !== strategy.dexAccounts.length
    ) {
      throw new Error(
        'poolAddresses, cexAccounts and dexAccounts must have the same length',
      );
    }

    // Parallelize the NAV calculation for all substrategies
    const navPromises = strategy.poolAddresses.map(
      (address: string, index: string | number) =>
        this.calculateNAV(
          address,
          strategy.cexAccounts[index],
          strategy.dexAccounts[index],
        ),
    );

    // Parallelize the total shares calculation
    const totalSharesPromise = this.web3Service.getSharesSupply(
      strategy.sharesAddress,
    );

    // Resolve all promises concurrently
    const [navResults, totalShares] = await Promise.all([
      Promise.all(navPromises),
      totalSharesPromise,
    ]);

    const nav = navResults.reduce((acc, current) => acc + current, 0);

    const vps0 = strategy.initialVPS;
    const t0 = strategy.initialTime.getTime();

    // Calculate VPS (Value per Share)
    const vps = nav / totalShares;

    // Calculate APY with compounding
    const daysPassed = (Date.now() - t0) / (1000 * 60 * 60 * 24);
    const apy = (Math.pow(vps / vps0, 365 / daysPassed) - 1) * 100;

    // Save the new snapshot
    const snapshot = await this.prisma.snapshot.create({
      data: {
        strategyId,
        VPS: vps,
        APY: apy,
        NAV: nav,
        timestamp: new Date(),
      },
    });

    return snapshot;
  }

  async calculateSnapshotMarkPrice(strategyId: number, strategy = null) {
    if (!strategy) {
      strategy = await this.prisma.strategy.findUnique({
        where: { id: strategyId },
      });
    }

    if (!strategy) {
      throw new Error('Strategy not found');
    }

    if (
      strategy.poolAddresses.length !== strategy.cexAccounts.length ||
      strategy.poolAddresses.length !== strategy.dexAccounts.length
    ) {
      throw new Error(
        'poolAddresses, cexAccounts and dexAccounts must have the same length',
      );
    }

    // Parallelize the NAV calculation for all substrategies
    const navPromises = strategy.poolAddresses.map(
      (address: string, index: string | number) =>
        this.calculateNAVMarkPrice(
          address,
          strategy.cexAccounts[index],
          strategy.dexAccounts[index],
          strategy.symbols[index],
        ),
    );

    // Parallelize the total shares calculation
    const totalSharesPromise = this.web3Service.getSharesSupply(
      strategy.sharesAddress,
    );

    // Resolve all promises concurrently
    const [navResults, totalShares] = await Promise.all([
      Promise.all(navPromises),
      totalSharesPromise,
    ]);

    const nav = navResults.reduce((acc, current) => acc + current, 0);

    const vps0 = strategy.initialVPS;
    const t0 = strategy.initialTime.getTime();

    // Calculate VPS (Value per Share)
    const vps = nav / totalShares;

    // Calculate APY with compounding
    const daysPassed = (Date.now() - t0) / (1000 * 60 * 60 * 24);
    const apy = (Math.pow(vps / vps0, 365 / daysPassed) - 1) * 100;

    // Save the new snapshot
    const snapshot = await this.prisma.snapshot.create({
      data: {
        strategyId,
        VPS: vps,
        APY: apy,
        NAV: nav,
        timestamp: new Date(),
      },
    });

    return snapshot;
  }
}
