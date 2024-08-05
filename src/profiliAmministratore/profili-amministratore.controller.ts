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
  import { ProfiliAmministratoreService } from './profili-amministratore.service';
  import { CreateProfiloAmministratoreDto } from './dto/create-profilo-amministratore.dto';
  import { UpdateProfiloAmministratoreDto } from './dto/update-profilo-amministratore.dto';
  import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
  import { ProfiloAmministratoreEntity } from './entities/amministratore.entity';
  
  @Controller('profili-amministratore')
  @ApiTags('profili-amministratore')
  export class ProfiliAmministratoreController {
    constructor(private readonly profiliAmministratoreService: ProfiliAmministratoreService) {}
  
    @Post()
    @ApiCreatedResponse({ type: ProfiloAmministratoreEntity })
    async create(@Body() createProfiloAmministratoreDto: CreateProfiloAmministratoreDto) {
      return new ProfiloAmministratoreEntity(
        await this.profiliAmministratoreService.create(createProfiloAmministratoreDto),
      );
    }
  
    @Get()
    @ApiOkResponse({ type: ProfiloAmministratoreEntity, isArray: true })
    async findAll() {
      const profiliAmministratore = await this.profiliAmministratoreService.findAll();
      return profiliAmministratore.map(
        (profiloAmministratore) => new ProfiloAmministratoreEntity(profiloAmministratore),
      );
    }
  
    @Get(':id')
    @ApiOkResponse({ type: ProfiloAmministratoreEntity })
    async findOne(@Param('id', ParseIntPipe) id: number) {
      const profiloAmministratore = await this.profiliAmministratoreService.findOne(id);
      if (!profiloAmministratore) {
        throw new NotFoundException(`ProfiloAmministratore with ID ${id} does not exist.`);
      }
      return new ProfiloAmministratoreEntity(profiloAmministratore);
    }
  
    @Patch(':id')
    @ApiCreatedResponse({ type: ProfiloAmministratoreEntity })
    async update(
      @Param('id', ParseIntPipe) id: number,
      @Body() updateProfiloAmministratoreDto: UpdateProfiloAmministratoreDto,
    ) {
      return new ProfiloAmministratoreEntity(
        await this.profiliAmministratoreService.update(id, updateProfiloAmministratoreDto),
      );
    }
  
    @Delete(':id')
    @ApiOkResponse({ type: ProfiloAmministratoreEntity })
    async remove(@Param('id', ParseIntPipe) id: number) {
      return new ProfiloAmministratoreEntity(await this.profiliAmministratoreService.remove(id));
    }
  }
  