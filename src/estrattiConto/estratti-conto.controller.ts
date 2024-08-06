// src/estratti-conto/estratti-conto.controller.ts
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
  import { EstrattiContoService } from './estratti-conto.service';
  import { CreateEstrattoContoDto } from './dto/create-estratto-conto.dto';
  import { UpdateEstrattoContoDto } from './dto/update-estratto-conto.dto';
  import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
  import { EstrattoContoEntity } from './entities/estratto-conto.entity';
  
  @Controller('estratti-conto')
  @ApiTags('estratti-conto')
  export class EstrattiContoController {
    constructor(private readonly estrattiContoService: EstrattiContoService) {}
  
    @Post()
    @ApiCreatedResponse({ type: EstrattoContoEntity })
    async create(@Body() createEstrattoContoDto: CreateEstrattoContoDto) {
      return new EstrattoContoEntity(await this.estrattiContoService.create(createEstrattoContoDto));
    }
  
    @Get()
    @ApiOkResponse({ type: EstrattoContoEntity, isArray: true })
    async findAll() {
      const estrattiConto = await this.estrattiContoService.findAll();
      return estrattiConto.map((estrattoConto) => new EstrattoContoEntity(estrattoConto));
    }
  
    @Get(':id')
    @ApiOkResponse({ type: EstrattoContoEntity })
    async findOne(@Param('id', ParseIntPipe) id: number) {
      const estrattoConto = await this.estrattiContoService.findOne(id);
      if (!estrattoConto) {
        throw new NotFoundException(`EstrattoConto with ID ${id} does not exist.`);
      }
      return new EstrattoContoEntity(estrattoConto);
    }
  
    @Patch(':id')
    @ApiCreatedResponse({ type: EstrattoContoEntity })
    async update(
      @Param('id', ParseIntPipe) id: number,
      @Body() updateEstrattoContoDto: UpdateEstrattoContoDto,
    ) {
      const estrattoConto = await this.estrattiContoService.update(id, updateEstrattoContoDto);
      return new EstrattoContoEntity(estrattoConto);
    }
  
    @Delete(':id')
    @ApiOkResponse({ type: EstrattoContoEntity })
    async remove(@Param('id', ParseIntPipe) id: number) {
      const estrattoConto = await this.estrattiContoService.remove(id);
      return new EstrattoContoEntity(estrattoConto);
    }
  }
  