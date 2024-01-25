import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateStrategyDto } from './dto/create-strategy.dto';
import { UpdateStrategyDto } from './dto/update-strategy.dto';
import { CreateSnapshotDto } from './dto/create-snapshot.dto'; // Assumi l'esistenza di questo DTO
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class StrategiesService {
  constructor(private prisma: PrismaService) {}

  create(createStrategyDto: CreateStrategyDto) {
    return this.prisma.strategy.create({ data: createStrategyDto });
  }

  findAll() {
    return this.prisma.strategy.findMany();
  }

  findOne(id: number) {
    return this.prisma.strategy.findUnique({
      where: { id },
      include: {
        snapshots: true, // Include snapshots related to the strategy
      },
    });
  }

  update(id: number, updateStrategyDto: UpdateStrategyDto) {
    return this.prisma.strategy.update({
      where: { id },
      data: updateStrategyDto,
    });
  }

  // If no strategy to update Prisma will throw an error

  remove(id: number) {
    return this.prisma.strategy.delete({ where: { id } });
  }

  // Metodo per aggiungere una snapshot a una strategia
  async addSnapshot(strategyId: number, createSnapshotDto: CreateSnapshotDto) {
    const strategy = await this.prisma.strategy.findUnique({
      where: { id: strategyId },
    });

    if (!strategy) {
      throw new NotFoundException(`Strategy with ID ${strategyId} not found.`);
    }

    return this.prisma.snapshot.create({
      data: {
        ...createSnapshotDto,
        strategyId,
      },
    });
  }

  // Metodo per ottenere l'ultima snapshot di una strategia
  async getLatestSnapshot(strategyId: number) {
    const latestSnapshot = await this.prisma.snapshot.findFirst({
      where: { strategyId },
      orderBy: { timestamp: 'desc' },
    });

    if (!latestSnapshot) {
      throw new NotFoundException(
        `No snapshots found for strategy ID ${strategyId}.`,
      );
    }

    return latestSnapshot;
  }

  // Qui puoi aggiungere altri metodi specifici per le snapshot, se necessario
}
