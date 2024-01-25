import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { KpiCalculatorService } from './kpi-calculator/kpi-calculator.service';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const kpiService = app.get<KpiCalculatorService>(KpiCalculatorService);

  try {
    const strategyId = 8; // Ensure this is a valid ID in your database
    const substrategyId = 0;

    const snapshot = await kpiService.calculateSnapshot(
      strategyId,
      substrategyId,
    );
    console.log('Snapshot created:', snapshot);
  } catch (error) {
    console.error('Error occurred:', error.message);
  } finally {
    await app.close();
  }
}

bootstrap();

/*
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { KpiCalculatorService } from './kpi-calculator/kpi-calculator.service';
import { SchedulerRegistry } from '@nestjs/schedule';
import { CronJob } from 'cron';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const kpiService = app.get<KpiCalculatorService>(KpiCalculatorService);
  const schedulerRegistry = app.get(SchedulerRegistry);

  const job = new CronJob('0 *///15 * * * * ', async () => {
/*try {
  const strategyId = 8; // Ensure this is a valid ID in your database
  const substrategyId = 0;

  const snapshot = await kpiService.calculateSnapshot(
    strategyId,
    substrategyId,
  );
  console.log('Snapshot created:', snapshot);
} catch (error) {
  console.error('Error occurred:', error.message);
}
  });

schedulerRegistry.addCronJob('calculateSnapshot', job);
job.start();

  // No need to listen on a port
}

bootstrap();
*/