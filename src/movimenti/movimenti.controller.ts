// src/movimenti/movimenti.controller.ts
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
  import { MovimentiService } from './movimenti.service';
  import { CreateMovimentoDto } from './dto/create-movimento.dto';
  import { UpdateMovimentoDto } from './dto/update-movimento.dto';
  import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
  import { MovimentoEntity, MovimentoWithTransazioniEntity } from './entities/movimento.entity';
  
  @Controller('movimenti')
  @ApiTags('movimenti')
  export class MovimentiController {
    constructor(private readonly movimentiService: MovimentiService) {}
  
    @Post()
    @ApiCreatedResponse({ type: MovimentoEntity })
    async create(@Body() createMovimentoDto: CreateMovimentoDto) {
      return new MovimentoEntity(await this.movimentiService.create(createMovimentoDto));
    }
  
    @Get()
    @ApiOkResponse({ type: MovimentoEntity, isArray: true })
    async findAll() {
      const movimenti = await this.movimentiService.findAll();
      return movimenti.map((movimento) => new MovimentoEntity(movimento));
    }
  
    @Get(':id')
    @ApiOkResponse({ type: MovimentoEntity })
    async findOne(@Param('id', ParseIntPipe) id: number) {
      const movimento = await this.movimentiService.findOne(id);
      if (!movimento) {
        throw new NotFoundException(`Movimento with ID ${id} does not exist.`);
      }
      return new MovimentoEntity(movimento);
    }
  
    @Get(':id/transazioni')
    @ApiOkResponse({ type: MovimentoWithTransazioniEntity })
    async findOneWithTransazioni(@Param('id', ParseIntPipe) id: number) {
      const movimento = await this.movimentiService.findOneWithTransazioni(id);
      if (!movimento) {
        throw new NotFoundException(`Movimento with ID ${id} does not exist.`);
      }
      return new MovimentoWithTransazioniEntity(movimento);
    }
  
    @Patch(':id')
    @ApiCreatedResponse({ type: MovimentoEntity })
    async update(@Param('id', ParseIntPipe) id: number, @Body() updateMovimentoDto: UpdateMovimentoDto) {
      const movimento = await this.movimentiService.update(id, updateMovimentoDto);
      return new MovimentoEntity(movimento);
    }
  
    @Delete(':id')
    @ApiOkResponse({ type: MovimentoEntity })
    async remove(@Param('id', ParseIntPipe) id: number) {
      const movimento = await this.movimentiService.remove(id);
      return new MovimentoEntity(movimento);
    }
  }
  