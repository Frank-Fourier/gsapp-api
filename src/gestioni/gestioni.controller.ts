// src/gestioni/gestioni.controller.ts
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
  import { GestioniService } from './gestioni.service';
  import { CreateGestioneDto } from './dto/create-gestione.dto';
  import { UpdateGestioneDto } from './dto/update-gestione.dto';
  import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
  import { GestioneEntity, GestioneWithRelationsEntity } from './entities/gestione.entity';
  
  @Controller('gestioni')
  @ApiTags('gestioni')
  export class GestioniController {
    constructor(private readonly gestioniService: GestioniService) {}
  
    @Post()
    @ApiCreatedResponse({ type: GestioneEntity })
    async create(@Body() createGestioneDto: CreateGestioneDto) {
      return new GestioneEntity(await this.gestioniService.create(createGestioneDto));
    }
  
    @Get()
    @ApiOkResponse({ type: GestioneEntity, isArray: true })
    async findAll() {
      const gestioni = await this.gestioniService.findAll();
      return gestioni.map((gestione) => new GestioneEntity(gestione));
    }
  
    @Get(':id')
    @ApiOkResponse({ type: GestioneEntity })
    async findOne(@Param('id', ParseIntPipe) id: number) {
      const gestione = await this.gestioniService.findOne(id);
      if (!gestione) {
        throw new NotFoundException(`Gestione with ID ${id} does not exist.`);
      }
      return new GestioneEntity(gestione);
    }
  
    @Get(':id/details')
    @ApiOkResponse({ type: GestioneWithRelationsEntity })
    async findOneWithRelations(@Param('id', ParseIntPipe) id: number) {
      const gestione = await this.gestioniService.findOneWithRelations(id);
      if (!gestione) {
        throw new NotFoundException(`Gestione with ID ${id} does not exist.`);
      }
      return new GestioneWithRelationsEntity(gestione);
    }
  
    @Patch(':id')
    @ApiCreatedResponse({ type: GestioneEntity })
    async update(@Param('id', ParseIntPipe) id: number, @Body() updateGestioneDto: UpdateGestioneDto) {
      const gestione = await this.gestioniService.update(id, updateGestioneDto);
      return new GestioneEntity(gestione);
    }
  
    @Delete(':id')
    @ApiOkResponse({ type: GestioneEntity })
    async remove(@Param('id', ParseIntPipe) id: number) {
      const gestione = await this.gestioniService.remove(id);
      return new GestioneEntity(gestione);
    }
  }
  