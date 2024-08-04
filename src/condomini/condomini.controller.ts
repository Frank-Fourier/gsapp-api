// src/condomini/condomini.controller.ts
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
  import { CondominiService } from './condomini.service';
  import { CreateCondominioDto } from './dto/create-condominio.dto';
  import { UpdateCondominioDto } from './dto/update-condominio.dto';
  import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
  import { CondominioEntity } from './entities/condominio.entity';
  
  @Controller('condomini')
  @ApiTags('condomini')
  export class CondominiController {
    constructor(private readonly condominiService: CondominiService) {}
  
    @Post()
    @ApiCreatedResponse({ type: CondominioEntity })
    async create(@Body() createCondominioDto: CreateCondominioDto) {
      return new CondominioEntity(
        await this.condominiService.create(createCondominioDto),
      );
    }
  
    @Get()
    @ApiOkResponse({ type: CondominioEntity, isArray: true })
    async findAll() {
      const condomini = await this.condominiService.findAll();
      return condomini.map((condominio) => new CondominioEntity(condominio));
    }
  
    @Get(':id')
    @ApiOkResponse({ type: CondominioEntity })
    async findOne(@Param('id', ParseIntPipe) id: number) {
      const condominio = await this.condominiService.findOne(id);
      if (!condominio) {
        throw new NotFoundException(`Condominio with ID ${id} does not exist.`);
      }
      return new CondominioEntity(condominio);
    }
  
    @Patch(':id')
    @ApiCreatedResponse({ type: CondominioEntity })
    async update(
      @Param('id', ParseIntPipe) id: number,
      @Body() updateCondominioDto: UpdateCondominioDto,
    ) {
      return new CondominioEntity(
        await this.condominiService.update(id, updateCondominioDto),
      );
    }
  
    @Delete(':id')
    @ApiOkResponse({ type: CondominioEntity })
    async remove(@Param('id', ParseIntPipe) id: number) {
      return new CondominioEntity(await this.condominiService.remove(id));
    }
  }
  