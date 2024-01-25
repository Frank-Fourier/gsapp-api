// src/api/api.service.ts

import { Injectable } from '@nestjs/common';
import axios from 'axios';
import rateLimit, { RateLimitedAxiosInstance } from 'axios-rate-limit';

@Injectable()
export class ApiService {
  createRateLimitedAxiosInstance(maxRequests: number, perMilliseconds: number) {
    return rateLimit(axios.create(), { maxRequests, perMilliseconds });
  }

  async makeRequest(http: RateLimitedAxiosInstance, url: string, options = {}) {
    try {
      const response = await http.get(url, options);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}
