// src/dati-patrimoniali-iniziali/dati-patrimoniali-iniziali.controller.ts
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
  import { DatiPatrimonialiInizialiService } from './dati-patrimoniali-iniziali.service';
  import { CreateDatiPatrimonialiInizialiDto } from './dto/create-dati-patrimoniali-iniziali.dto';
  import { UpdateDatiPatrimonialiInizialiDto } from './dto/update-dati-patrimoniali-iniziali.dto';
  import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
  import { DatiPatrimonialiInizialiEntity } from './entities/dati-patrimoniali-iniziali.entity';
  
  @Controller('dati-patrimoniali-iniziali')
  @ApiTags('dati-patrimoniali-iniziali')
  export class DatiPatrimonialiInizialiController {
    constructor(private readonly datiPatrimonialiInizialiService: DatiPatrimonialiInizialiService) {}
  
    @Post()
    @ApiCreatedResponse({ type: DatiPatrimonialiInizialiEntity })
    async create(@Body() createDatiPatrimonialiInizialiDto: CreateDatiPatrimonialiInizialiDto) {
      return new DatiPatrimonialiInizialiEntity(await this.datiPatrimonialiInizialiService.create(createDatiPatrimonialiInizialiDto));
    }
  
    @Get()
    @ApiOkResponse({ type: DatiPatrimonialiInizialiEntity, isArray: true })
    async findAll() {
      const dati = await this.datiPatrimonialiInizialiService.findAll();
      return dati.map((d) => new DatiPatrimonialiInizialiEntity(d));
    }
  
    @Get(':id')
    @ApiOkResponse({ type: DatiPatrimonialiInizialiEntity })
    async findOne(@Param('id', ParseIntPipe) id: number) {
      const dati = await this.datiPatrimonialiInizialiService.findOne(id);
      if (!dati) {
        throw new NotFoundException(`Dati Patrimoniali Iniziali with ID ${id} does not exist.`);
      }
      return new DatiPatrimonialiInizialiEntity(dati);
    }
  
    @Patch(':id')
    @ApiCreatedResponse({ type: DatiPatrimonialiInizialiEntity })
    async update(@Param('id', ParseIntPipe) id: number, @Body() updateDatiPatrimonialiInizialiDto: UpdateDatiPatrimonialiInizialiDto) {
      const dati = await this.datiPatrimonialiInizialiService.update(id, updateDatiPatrimonialiInizialiDto);
      return new DatiPatrimonialiInizialiEntity(dati);
    }
  
    @Delete(':id')
    @ApiOkResponse({ type: DatiPatrimonialiInizialiEntity })
    async remove(@Param('id', ParseIntPipe) id: number) {
      const dati = await this.datiPatrimonialiInizialiService.remove(id);
      return new DatiPatrimonialiInizialiEntity(dati);
    }
  }
  