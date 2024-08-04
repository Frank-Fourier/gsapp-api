// src/fornitori/fornitori.controller.ts
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
import { FornitoriService } from './fornitori.service';
import { CreateFornitoreDto } from './dto/create-fornitore.dto';
import { UpdateFornitoreDto } from './dto/update-fornitore.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { FornitoreEntity } from './entities/fornitore.entity';

@Controller('fornitori')
@ApiTags('fornitori')
export class FornitoriController {
  constructor(private readonly fornitoriService: FornitoriService) {}

  @Post()
  @ApiCreatedResponse({ type: FornitoreEntity })
  async create(@Body() createFornitoreDto: CreateFornitoreDto) {
    return new FornitoreEntity(
      await this.fornitoriService.create(createFornitoreDto),
    );
  }

  @Get()
  @ApiOkResponse({ type: FornitoreEntity, isArray: true })
  async findAll() {
    const fornitori = await this.fornitoriService.findAll();
    return fornitori.map((fornitore) => new FornitoreEntity(fornitore));
  }

  @Get(':id')
  @ApiOkResponse({ type: FornitoreEntity })
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const fornitore = await this.fornitoriService.findOne(id);
    if (!fornitore) {
      throw new NotFoundException(`Fornitore with ID ${id} does not exist.`);
    }
    return new FornitoreEntity(fornitore);
  }

  @Patch(':id')
  @ApiCreatedResponse({ type: FornitoreEntity })
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateFornitoreDto: UpdateFornitoreDto,
  ) {
    return new FornitoreEntity(
      await this.fornitoriService.update(id, updateFornitoreDto),
    );
  }

  @Delete(':id')
  @ApiOkResponse({ type: FornitoreEntity })
  async remove(@Param('id', ParseIntPipe) id: number) {
    return new FornitoreEntity(await this.fornitoriService.remove(id));
  }
}
