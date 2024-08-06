// src/preventivi/preventivi.controller.ts
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
  import { PreventiviService } from './preventivi.service';
  import { CreatePreventivoDto } from './dto/create-preventivo.dto';
  import { UpdatePreventivoDto } from './dto/update-preventivo.dto';
  import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
  import { PreventivoEntity, PreventivoWithRelationsEntity } from './entities/preventivo.entity';
  
  @Controller('preventivi')
  @ApiTags('preventivi')
  export class PreventiviController {
    constructor(private readonly preventiviService: PreventiviService) {}
  
    @Post()
    @ApiCreatedResponse({ type: PreventivoEntity })
    async create(@Body() createPreventivoDto: CreatePreventivoDto) {
      return new PreventivoEntity(await this.preventiviService.create(createPreventivoDto));
    }
  
    @Get()
    @ApiOkResponse({ type: PreventivoEntity, isArray: true })
    async findAll() {
      const preventivi = await this.preventiviService.findAll();
      return preventivi.map((preventivo) => new PreventivoEntity(preventivo));
    }
  
    @Get(':id')
    @ApiOkResponse({ type: PreventivoEntity })
    async findOne(@Param('id', ParseIntPipe) id: number) {
      const preventivo = await this.preventiviService.findOne(id);
      if (!preventivo) {
        throw new NotFoundException(`Preventivo with ID ${id} does not exist.`);
      }
      return new PreventivoEntity(preventivo);
    }
  
    @Get(':id/details')
    @ApiOkResponse({ type: PreventivoWithRelationsEntity })
    async findOneWithRelations(@Param('id', ParseIntPipe) id: number) {
      const preventivo = await this.preventiviService.findOneWithRelations(id);
      if (!preventivo) {
        throw new NotFoundException(`Preventivo with ID ${id} does not exist.`);
      }
      return new PreventivoWithRelationsEntity(preventivo);
    }
  
    @Patch(':id')
    @ApiCreatedResponse({ type: PreventivoEntity })
    async update(@Param('id', ParseIntPipe) id: number, @Body() updatePreventivoDto: UpdatePreventivoDto) {
      const preventivo = await this.preventiviService.update(id, updatePreventivoDto);
      return new PreventivoEntity(preventivo);
    }
  
    @Delete(':id')
    @ApiOkResponse({ type: PreventivoEntity })
    async remove(@Param('id', ParseIntPipe) id: number) {
      const preventivo = await this.preventiviService.remove(id);
      return new PreventivoEntity(preventivo);
    }
  }
  