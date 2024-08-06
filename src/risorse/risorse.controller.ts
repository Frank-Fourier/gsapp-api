// src/risorse/risorse.controller.ts
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
import { RisorseService } from './risorse.service';
import { CreateRisorsaDto } from './dto/create-risorsa.dto';
import { UpdateRisorsaDto } from './dto/update-risorsa.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { RisorsaEntity, RisorsaWithTransazioniEntity, RisorsaWithDetailsEntity } from './entities/risorsa.entity';

@Controller('risorse')
@ApiTags('risorse')
export class RisorseController {
  constructor(private readonly risorseService: RisorseService) { }

  @Post()
  @ApiCreatedResponse({ type: RisorsaEntity })
  async create(@Body() createRisorsaDto: CreateRisorsaDto) {
    return new RisorsaEntity(await this.risorseService.create(createRisorsaDto));
  }

  @Get()
  @ApiOkResponse({ type: RisorsaEntity, isArray: true })
  async findAll() {
    const risorse = await this.risorseService.findAll();
    return risorse.map((risorsa) => new RisorsaEntity(risorsa));
  }

  @Get(':id')
  @ApiOkResponse({ type: RisorsaEntity })
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const risorsa = await this.risorseService.findOne(id);
    if (!risorsa) {
      throw new NotFoundException(`Risorsa with ID ${id} does not exist.`);
    }
    return new RisorsaEntity(risorsa);
  }

  @Get(':id/transazioni')
  @ApiOkResponse({ type: RisorsaWithTransazioniEntity })
  async findOneWithTransazioni(@Param('id', ParseIntPipe) id: number) {
    const risorsa = await this.risorseService.findOneWithTransazioni(id);
    if (!risorsa) {
      throw new NotFoundException(`Risorsa with ID ${id} does not exist.`);
    }
    return new RisorsaWithTransazioniEntity(risorsa);
  }

  @Get(':id/dettagli')
  @ApiOkResponse({ type: RisorsaWithDetailsEntity })
  async findOneWithDetails(@Param('id', ParseIntPipe) id: number) {
    const risorsa = await this.risorseService.findOneWithDetails(id);
    if (!risorsa) {
      throw new NotFoundException(`Risorsa with ID ${id} does not exist.`);
    }
    return new RisorsaWithDetailsEntity(risorsa);
  }

  @Patch(':id')
  @ApiCreatedResponse({ type: RisorsaEntity })
  async update(@Param('id', ParseIntPipe) id: number, @Body() updateRisorsaDto: UpdateRisorsaDto) {
    const risorsa = await this.risorseService.update(id, updateRisorsaDto);
    return new RisorsaEntity(risorsa);
  }

  @Delete(':id')
  @ApiOkResponse({ type: RisorsaEntity })
  async remove(@Param('id', ParseIntPipe) id: number) {
    const risorsa = await this.risorseService.remove(id);
    return new RisorsaEntity(risorsa);
  }
}
