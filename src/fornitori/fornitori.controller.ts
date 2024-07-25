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
import { AnagraficheService } from './anagrafiche.service';
import { CreateAnagraficaDto } from './dto/create-anagrafica.dto';
import { UpdateAnagraficaDto } from './dto/update-anagrafica.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { AnagraficaEntity } from './entities/anagrafica.entity';

@Controller('anagrafiche')
@ApiTags('anagrafiche')
export class AnagraficheController {
  constructor(private readonly anagraficheService: AnagraficheService) {}

  @Post()
  @ApiCreatedResponse({ type: AnagraficaEntity })
  async create(@Body() createAnagraficaDto: CreateAnagraficaDto) {
    return new AnagraficaEntity(
      await this.anagraficheService.create(createAnagraficaDto),
    );
  }

  @Get()
  @ApiOkResponse({ type: AnagraficaEntity, isArray: true })
  async findAll() {
    const anagrafiche = await this.anagraficheService.findAll();
    return anagrafiche.map((anagrafica) => new AnagraficaEntity(anagrafica));
  }

  @Get(':id')
  @ApiOkResponse({ type: AnagraficaEntity })
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const anagrafica = await this.anagraficheService.findOne(id);
    if (!anagrafica) {
      throw new NotFoundException(`Anagrafica with ID ${id} does not exist.`);
    }
    return new AnagraficaEntity(anagrafica);
  }

  @Patch(':id')
  @ApiCreatedResponse({ type: AnagraficaEntity })
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateAnagraficaDto: UpdateAnagraficaDto,
  ) {
    return new AnagraficaEntity(
      await this.anagraficheService.update(id, updateAnagraficaDto),
    );
  }

  @Delete(':id')
  @ApiOkResponse({ type: AnagraficaEntity })
  async remove(@Param('id', ParseIntPipe) id: number) {
    return new AnagraficaEntity(await this.anagraficheService.remove(id));
  }
}
