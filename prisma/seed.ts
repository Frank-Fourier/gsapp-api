// prisma/seed.ts

import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

// initialize Prisma Client
const prisma = new PrismaClient();

const roundsOfHashing = 10;

async function main() {
  await prisma.snapshot.deleteMany({});
  await prisma.strategy.deleteMany({});
  // create two dummy users
  const passwordSabin = await bcrypt.hash('password-sabin', roundsOfHashing);
  const passwordAlex = await bcrypt.hash('password-alex', roundsOfHashing);

  const user1 = await prisma.user.upsert({
    where: { email: 'sabin@adams.com' },
    update: {
      password: passwordSabin,
    },
    create: {
      email: 'sabin@adams.com',
      name: 'Sabin Adams',
      password: passwordSabin,
    },
  });

  const user2 = await prisma.user.upsert({
    where: { email: 'alex@ruheni.com' },
    update: {
      password: passwordAlex,
    },
    create: {
      email: 'alex@ruheni.com',
      name: 'Alex Ruheni',
      password: passwordAlex,
    },
  });

  // create dummy strategies
  const strategy1 = await prisma.strategy.create({
    data: {
      title: 'Strategy 1',
      description: 'Description for Strategy 1',
      initialVPS: 1,
      initialTime: new Date('2023-03-10'),
      poolAddresses: ['0x811beEd0119b4AfCE20D2583EB608C6F7AF1954f'],
      sharesAddress: '0xd7e9709d152B9eF7D7BE07C5954c51386481CfEC',
      dexAccounts: ['0xA0C8d14123a64C2D8678b9879560Aa605c1F4477'],
      cexAccounts: ['BINANCE_5'],
      symbols: ['1000SHIB/ETH'],
    },
  });

  const strategy2 = await prisma.strategy.create({
    data: {
      title: 'Strategy 2',
      description: 'Description for Strategy 2',
      initialVPS: 2,
      initialTime: new Date('2023-03-10'),
      poolAddresses: [
        '0x811beEd0119b4AfCE20D2583EB608C6F7AF1954f',
        '0x811beEd0119b4AfCE20D2583EB608C6F7AF1954f',
      ],
      sharesAddress: '0xd7e9709d152B9eF7D7BE07C5954c51386481CfEC',
      dexAccounts: [
        '0xA0C8d14123a64C2D8678b9879560Aa605c1F4477',
        '0xA0C8d14123a64C2D8678b9879560Aa605c1F4477',
      ],
      cexAccounts: ['BINANCE_5', 'BINANCE_5'],
      symbols: ['1000SHIB/ETH', '1000SHIB/ETH'],
    },
  });

  // create dummy snapshots for strategies
  const snapshot1 = await prisma.snapshot.create({
    data: {
      strategyId: strategy1.id,
      VPS: 105.0,
      APY: 5.0,
      NAV: 10000.0,
      timestamp: new Date(),
    },
  });

  const snapshot2 = await prisma.snapshot.create({
    data: {
      strategyId: strategy2.id,
      VPS: 210.0,
      APY: 10.0,
      NAV: 20000.0,
      timestamp: new Date(),
    },
  });

  console.log({ user1, user2, strategy1, strategy2, snapshot1, snapshot2 });
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });
