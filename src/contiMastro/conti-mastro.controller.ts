// src/conti-mastro/conti-mastro.controller.ts
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
  import { ContiMastroService } from './conti-mastro.service';
  import { CreateContoMastroDto } from './dto/create-conto-mastro.dto';
  import { UpdateContoMastroDto } from './dto/update-conto-mastro.dto';
  import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
  import { ContoMastroEntity } from './entities/conto-mastro.entity';
  
  @Controller('conti-mastro')
  @ApiTags('conti-mastro')
  export class ContiMastroController {
    constructor(private readonly contiMastroService: ContiMastroService) {}
  
    @Post()
    @ApiCreatedResponse({ type: ContoMastroEntity })
    async create(@Body() createContoMastroDto: CreateContoMastroDto) {
      return new ContoMastroEntity(await this.contiMastroService.create(createContoMastroDto));
    }
  
    @Get()
    @ApiOkResponse({ type: ContoMastroEntity, isArray: true })
    async findAll() {
      const contiMastro = await this.contiMastroService.findAll();
      return contiMastro.map((contoMastro) => new ContoMastroEntity(contoMastro));
    }
  
    @Get(':id')
    @ApiOkResponse({ type: ContoMastroEntity })
    async findOne(@Param('id', ParseIntPipe) id: number) {
      const contoMastro = await this.contiMastroService.findOne(id);
      if (!contoMastro) {
        throw new NotFoundException(`ContoMastro with ID ${id} does not exist.`);
      }
      return new ContoMastroEntity(contoMastro);
    }
  
    @Patch(':id')
    @ApiCreatedResponse({ type: ContoMastroEntity })
    async update(@Param('id', ParseIntPipe) id: number, @Body() updateContoMastroDto: UpdateContoMastroDto) {
      const contoMastro = await this.contiMastroService.update(id, updateContoMastroDto);
      return new ContoMastroEntity(contoMastro);
    }
  
    @Delete(':id')
    @ApiOkResponse({ type: ContoMastroEntity })
    async remove(@Param('id', ParseIntPipe) id: number) {
      const contoMastro = await this.contiMastroService.remove(id);
      return new ContoMastroEntity(contoMastro);
    }
  }
  