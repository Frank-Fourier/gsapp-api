// src/fondi/fondi.controller.ts
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
  import { FondiService } from './fondi.service';
  import { CreateFondoDto } from './dto/create-fondo.dto';
  import { UpdateFondoDto } from './dto/update-fondo.dto';
  import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
  import { FondoEntity, FondoWithTransazioniEntity, FondoWithDetailsEntity } from './entities/fondo.entity';
  
  @Controller('fondi')
  @ApiTags('fondi')
  export class FondiController {
    constructor(private readonly fondiService: FondiService) {}
  
    @Post()
    @ApiCreatedResponse({ type: FondoEntity })
    async create(@Body() createFondoDto: CreateFondoDto) {
      return new FondoEntity(await this.fondiService.create(createFondoDto));
    }
  
    @Get()
    @ApiOkResponse({ type: FondoEntity, isArray: true })
    async findAll() {
      const fondi = await this.fondiService.findAll();
      return fondi.map((fondo) => new FondoEntity(fondo));
    }
  
    @Get(':id')
    @ApiOkResponse({ type: FondoEntity })
    async findOne(@Param('id', ParseIntPipe) id: number) {
      const fondo = await this.fondiService.findOne(id);
      if (!fondo) {
        throw new NotFoundException(`Fondo with ID ${id} does not exist.`);
      }
      return new FondoEntity(fondo);
    }

    @Get(':id/transazioni')
    @ApiOkResponse({ type: FondoWithTransazioniEntity })
    async findOneWithTransazioni(@Param('id', ParseIntPipe) id: number) {
      const fondo = await this.fondiService.findOneWithTransazioni(id);
      if (!fondo) {
        throw new NotFoundException(`Risorsa with ID ${id} does not exist.`);
      }
      return new FondoWithTransazioniEntity(fondo);
    }

    @Get(':id/dettagli')
  @ApiOkResponse({ type: FondoWithDetailsEntity })
  async findOneWithDetails(@Param('id', ParseIntPipe) id: number) {
    const risorsa = await this.fondiService.findOneWithDetails(id);
    if (!risorsa) {
      throw new NotFoundException(`Risorsa with ID ${id} does not exist.`);
    }
    return new FondoWithDetailsEntity(risorsa);
  }
  
    @Patch(':id')
    @ApiCreatedResponse({ type: FondoEntity })
    async update(@Param('id', ParseIntPipe) id: number, @Body() updateFondoDto: UpdateFondoDto) {
      const fondo = await this.fondiService.update(id, updateFondoDto);
      return new FondoEntity(fondo);
    }
  
    @Delete(':id')
    @ApiOkResponse({ type: FondoEntity })
    async remove(@Param('id', ParseIntPipe) id: number) {
      const fondo = await this.fondiService.remove(id);
      return new FondoEntity(fondo);
    }
  }
  