// src/tabelle/tabelle.controller.ts
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
  import { TabelleService } from './tabelle.service';
  import { CreateTabellaDto } from './dto/create-tabella.dto';
  import { UpdateTabellaDto } from './dto/update-tabella.dto';
  import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
  import { TabellaEntity } from './entities/tabella.entity';
  
  @Controller('tabelle')
  @ApiTags('tabelle')
  export class TabelleController {
    constructor(private readonly tabelleService: TabelleService) {}
  
    @Post()
    @ApiCreatedResponse({ type: TabellaEntity })
    async create(@Body() createTabellaDto: CreateTabellaDto) {
      return new TabellaEntity(await this.tabelleService.create(createTabellaDto));
    }
  
    @Get()
    @ApiOkResponse({ type: TabellaEntity, isArray: true })
    async findAll() {
      const tabelle = await this.tabelleService.findAll();
      return tabelle.map((tabella) => new TabellaEntity(tabella));
    }
  
    @Get(':id')
    @ApiOkResponse({ type: TabellaEntity })
    async findOne(@Param('id', ParseIntPipe) id: number) {
      const tabella = await this.tabelleService.findOne(id);
      if (!tabella) {
        throw new NotFoundException(`Tabella with ID ${id} does not exist.`);
      }
      return new TabellaEntity(tabella);
    }
  
    @Patch(':id')
    @ApiCreatedResponse({ type: TabellaEntity })
    async update(@Param('id', ParseIntPipe) id: number, @Body() updateTabellaDto: UpdateTabellaDto) {
      const tabella = await this.tabelleService.update(id, updateTabellaDto);
      return new TabellaEntity(tabella);
    }
  
    @Delete(':id')
    @ApiOkResponse({ type: TabellaEntity })
    async remove(@Param('id', ParseIntPipe) id: number) {
      const tabella = await this.tabelleService.remove(id);
      return new TabellaEntity(tabella);
    }
  }
  