// src/dipendenti/dipendenti.controller.ts
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
  import { DipendentiService } from './dipendenti.service';
  import { CreateDipendenteDto } from './dto/create-dipendente.dto';
  import { UpdateDipendenteDto } from './dto/update-dipendente.dto';
  import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
  import { DipendenteEntity } from './entities/dipendente.entity';
  
  @Controller('dipendenti')
  @ApiTags('dipendenti')
  export class DipendentiController {
    constructor(private readonly dipendentiService: DipendentiService) {}
  
    @Post()
    @ApiCreatedResponse({ type: DipendenteEntity })
    async create(@Body() createDipendenteDto: CreateDipendenteDto) {
      return new DipendenteEntity(
        await this.dipendentiService.create(createDipendenteDto),
      );
    }
  
    @Get()
    @ApiOkResponse({ type: DipendenteEntity, isArray: true })
    async findAll() {
      const dipendenti = await this.dipendentiService.findAll();
      return dipendenti.map((dipendente) => new DipendenteEntity(dipendente));
    }
  
    @Get(':id')
    @ApiOkResponse({ type: DipendenteEntity })
    async findOne(@Param('id', ParseIntPipe) id: number) {
      const dipendente = await this.dipendentiService.findOne(id);
      if (!dipendente) {
        throw new NotFoundException(`Dipendente with ID ${id} does not exist.`);
      }
      return new DipendenteEntity(dipendente);
    }
  
    @Patch(':id')
    @ApiCreatedResponse({ type: DipendenteEntity })
    async update(
      @Param('id', ParseIntPipe) id: number,
      @Body() updateDipendenteDto: UpdateDipendenteDto,
    ) {
      return new DipendenteEntity(
        await this.dipendentiService.update(id, updateDipendenteDto),
      );
    }
  
    @Delete(':id')
    @ApiOkResponse({ type: DipendenteEntity })
    async remove(@Param('id', ParseIntPipe) id: number) {
      return new DipendenteEntity(await this.dipendentiService.remove(id));
    }
  }
  