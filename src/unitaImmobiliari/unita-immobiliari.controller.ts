// src/unita-immobiliari/unita-immobiliari.controller.ts
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
  import { UnitaImmobiliariService } from './unita-immobiliari.service';
  import { CreateUnitaImmobiliareDto } from './dto/create-unita-immobiliare.dto';
  import { UpdateUnitaImmobiliareDto } from './dto/update-unita-immobiliare.dto';
  import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
  import { UnitaImmobiliareEntity } from './entities/unita-immobiliare.entity';
  
  @Controller('unita-immobiliari')
  @ApiTags('unita-immobiliari')
  export class UnitaImmobiliariController {
    constructor(private readonly unitaImmobiliariService: UnitaImmobiliariService) {}
  
    @Post()
    @ApiCreatedResponse({ type: UnitaImmobiliareEntity })
    async create(@Body() createUnitaImmobiliareDto: CreateUnitaImmobiliareDto) {
      return new UnitaImmobiliareEntity(
        await this.unitaImmobiliariService.create(createUnitaImmobiliareDto),
      );
    }
  
    @Get()
    @ApiOkResponse({ type: UnitaImmobiliareEntity, isArray: true })
    async findAll() {
      const unitaImmobiliari = await this.unitaImmobiliariService.findAll();
      return unitaImmobiliari.map((unitaImmobiliare) => new UnitaImmobiliareEntity(unitaImmobiliare));
    }
  
    @Get(':id')
    @ApiOkResponse({ type: UnitaImmobiliareEntity })
    async findOne(@Param('id', ParseIntPipe) id: number) {
      const unitaImmobiliare = await this.unitaImmobiliariService.findOne(id);
      if (!unitaImmobiliare) {
        throw new NotFoundException(`UnitaImmobiliare with ID ${id} does not exist.`);
      }
      return new UnitaImmobiliareEntity(unitaImmobiliare);
    }
  
    @Patch(':id')
    @ApiCreatedResponse({ type: UnitaImmobiliareEntity })
    async update(
      @Param('id', ParseIntPipe) id: number,
      @Body() updateUnitaImmobiliareDto: UpdateUnitaImmobiliareDto,
    ) {
      return new UnitaImmobiliareEntity(
        await this.unitaImmobiliariService.update(id, updateUnitaImmobiliareDto),
      );
    }
  
    @Delete(':id')
    @ApiOkResponse({ type: UnitaImmobiliareEntity })
    async remove(@Param('id', ParseIntPipe) id: number) {
      return new UnitaImmobiliareEntity(await this.unitaImmobiliariService.remove(id));
    }
  }
  