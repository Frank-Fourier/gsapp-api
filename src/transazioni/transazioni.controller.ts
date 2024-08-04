// src/transazioni/transazioni.controller.ts
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
  import { TransazioniService } from './transazioni.service';
  import { CreateTransazioneDto } from './dto/create-transazione.dto';
  import { UpdateTransazioneDto } from './dto/update-transazione.dto';
  import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
  import { TransazioneEntity } from './entities/transazione.entity';
  
  @Controller('transazioni')
  @ApiTags('transazioni')
  export class TransazioniController {
    constructor(private readonly transazioniService: TransazioniService) {}
  
    @Post()
    @ApiCreatedResponse({ type: TransazioneEntity })
    async create(@Body() createTransazioneDto: CreateTransazioneDto) {
      return new TransazioneEntity(await this.transazioniService.create(createTransazioneDto));
    }
  
    @Get()
    @ApiOkResponse({ type: TransazioneEntity, isArray: true })
    async findAll() {
      const transazioni = await this.transazioniService.findAll();
      return transazioni.map((transazione) => new TransazioneEntity(transazione));
    }
  
    @Get(':id')
    @ApiOkResponse({ type: TransazioneEntity })
    async findOne(@Param('id', ParseIntPipe) id: number) {
      const transazione = await this.transazioniService.findOne(id);
      if (!transazione) {
        throw new NotFoundException(`Transazione with ID ${id} does not exist.`);
      }
      return new TransazioneEntity(transazione);
    }
  
    @Patch(':id')
    @ApiCreatedResponse({ type: TransazioneEntity })
    async update(@Param('id', ParseIntPipe) id: number, @Body() updateTransazioneDto: UpdateTransazioneDto) {
      const transazione = await this.transazioniService.update(id, updateTransazioneDto);
      return new TransazioneEntity(transazione);
    }
  
    @Delete(':id')
    @ApiOkResponse({ type: TransazioneEntity })
    async remove(@Param('id', ParseIntPipe) id: number) {
      const transazione = await this.transazioniService.remove(id);
      return new TransazioneEntity(transazione);
    }
  }
  