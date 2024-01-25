import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  NotFoundException,
  ParseIntPipe,
} from '@nestjs/common';
import { StrategiesService } from './strategies.service';
import { KpiCalculatorService } from '../kpi-calculator/kpi-calculator.service';
import { CreateStrategyDto } from './dto/create-strategy.dto';
import { UpdateStrategyDto } from './dto/update-strategy.dto';
import { CreateSnapshotDto } from './dto/create-snapshot.dto'; // Importa il tuo CreateSnapshotDto
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { StrategyEntity } from './entities/strategy.entity';
import { SnapshotEntity } from './entities/snapshot.entity'; // Importa la tua SnapshotEntity

@Controller('strategies')
@ApiTags('strategies')
export class StrategiesController {
  constructor(
    private readonly strategiesService: StrategiesService,
    private readonly kpiCalculatorService: KpiCalculatorService,
  ) {}

  @Post()
  @ApiCreatedResponse({ type: StrategyEntity }) // Sostituisci con la tua Strategy Entity o DTO
  async create(@Body() createStrategyDto: CreateStrategyDto) {
    return new StrategyEntity(
      await this.strategiesService.create(createStrategyDto),
    );
  }

  @Get()
  @ApiOkResponse({ type: StrategyEntity, isArray: true }) // Sostituisci con la tua Strategy Entity o DTO
  async findAll() {
    const strategies = await this.strategiesService.findAll();
    return strategies.map((strategy) => new StrategyEntity(strategy));
  }

  @Get(':id')
  @ApiOkResponse({ type: StrategyEntity }) // Sostituisci con la tua Strategy Entity o DTO
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const strategy = await this.strategiesService.findOne(id);
    if (!strategy) {
      throw new NotFoundException(`Strategy with ${id} does not exist.`);
    }
    return new StrategyEntity(strategy);
  }

  @Patch(':id')
  @ApiCreatedResponse({ type: StrategyEntity }) // Sostituisci con la tua Strategy Entity o DTO
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateStrategyDto: UpdateStrategyDto,
  ) {
    return new StrategyEntity(
      await this.strategiesService.update(id, updateStrategyDto),
    );
  }

  @Delete(':id')
  @ApiOkResponse({ type: StrategyEntity }) // Sostituisci con la tua Strategy Entity o DTO
  async remove(@Param('id', ParseIntPipe) id: number) {
    return new StrategyEntity(await this.strategiesService.remove(id));
  }

  @Post(':id/snapshot')
  @ApiCreatedResponse({ type: SnapshotEntity }) // Usa la tua SnapshotEntity o DTO
  async addSnapshot(
    @Param('id', ParseIntPipe) strategyId: number,
    @Body() createSnapshotDto: CreateSnapshotDto,
  ) {
    const snapshot = await this.strategiesService.addSnapshot(
      strategyId,
      createSnapshotDto,
    );
    return new SnapshotEntity(snapshot);
  }

  @Get(':id/snapshot/latest')
  @ApiOkResponse({ type: SnapshotEntity }) // Usa la tua SnapshotEntity o DTO
  async getLatestSnapshot(@Param('id', ParseIntPipe) strategyId: number) {
    const snapshot = await this.strategiesService.getLatestSnapshot(strategyId);
    if (!snapshot) {
      throw new NotFoundException(
        `No snapshots found for strategy ID ${strategyId}.`,
      );
    }
    return new SnapshotEntity(snapshot);
  }

  @Post(':id/calculate-snapshot')
  @ApiCreatedResponse({ type: SnapshotEntity })
  async calculateAndSaveSnapshot(
    @Param('id', ParseIntPipe) strategyId: number,
  ): Promise<SnapshotEntity> {
    const snapshotData =
      await this.kpiCalculatorService.calculateSnapshot(strategyId);

    return new SnapshotEntity(snapshotData);
  }
}
