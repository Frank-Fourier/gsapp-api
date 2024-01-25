// src/web3/web3.service.ts

import { Injectable } from '@nestjs/common';
import { ethers } from 'ethers';
import { ApiService } from '../services/api.service';
import { RateLimitedAxiosInstance } from 'axios-rate-limit';
import { UniswapV2PairABI } from '../abis/uniswap-v2-pair.abi';

interface LPTokenQuantity {
  base: number;
  quote: number;
}

@Injectable()
export class Web3Service {
  private provider: ethers.JsonRpcProvider;
  private cryptoApiHttpDexScreener: RateLimitedAxiosInstance;

  constructor(private apiService: ApiService) {
    this.provider = new ethers.JsonRpcProvider(
      'https://mainnet.infura.io/v3/b165ca4a2a7f4583bebae070d32e8f43',
    );
    this.cryptoApiHttpDexScreener =
      this.apiService.createRateLimitedAxiosInstance(200, 1000 * 60);
  }

  private getContractInstance(address: string): ethers.Contract {
    return new ethers.Contract(address, UniswapV2PairABI, this.provider);
  }

  async getV2LpUsd(lpTokenAddress: string): Promise<number> {
    const data = await this.apiService.makeRequest(
      this.cryptoApiHttpDexScreener,
      `https://api.dexscreener.com/latest/dex/pairs/ethereum/${lpTokenAddress}`,
    );

    return data?.pair?.liquidity?.usd || 0;
  }

  // getgetV2LpData
  async getLpData(lpTokenAddress: string): Promise<any> {
    const data = await this.apiService.makeRequest(
      this.cryptoApiHttpDexScreener,
      `https://api.dexscreener.com/latest/dex/pairs/ethereum/${lpTokenAddress}`,
    );

    return data?.pair?.liquidity || {};
  }

  async getSharesSupply(sharesAddress: string): Promise<number> {
    const sharesContract = this.getContractInstance(sharesAddress);
    const totalSupply = await sharesContract.totalSupply();
    sharesContract.removeAllListeners();
    return parseFloat(ethers.formatEther(totalSupply));
  }

  async getLPTokenValue(
    walletAddress: string,
    lpTokenAddress: string,
  ): Promise<number> {
    const pairContract: any = this.getContractInstance(lpTokenAddress);
    const totalSupply = await pairContract.totalSupply();
    const lpBalance = await pairContract.balanceOf(walletAddress);

    const totalLpUsd = await this.getV2LpUsd(lpTokenAddress);
    pairContract.removeAllListeners();
    return (totalLpUsd * parseFloat(lpBalance)) / parseFloat(totalSupply);
  }

  async getLPTokenQuantity(
    walletAddress: string,
    lpTokenAddress: string,
  ): Promise<LPTokenQuantity> {
    const pairContract: any = this.getContractInstance(lpTokenAddress);
    const totalSupply = await pairContract.totalSupply();
    const lpBalance = await pairContract.balanceOf(walletAddress);
    const { base: totalLpBase, quote: totalLpQuote } =
      await this.getLpData(lpTokenAddress);
    pairContract.removeAllListeners();

    return {
      base: (totalLpBase * parseFloat(lpBalance)) / parseFloat(totalSupply),
      quote: (totalLpQuote * parseFloat(lpBalance)) / parseFloat(totalSupply),
    };
  }
}
