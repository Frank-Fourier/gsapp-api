import { Module } from '@nestjs/common';
import { Web3Service } from './web3.service';
import { ApiService } from '../services/api.service'; // Adjust the import based on the actual location

@Module({
  providers: [Web3Service, ApiService],
  exports: [Web3Service, ApiService],
})
export class Web3Module {}
