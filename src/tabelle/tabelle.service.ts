import { Injectable, BadRequestException } from '@nestjs/common';
import { CreateTabellaDto } from './dto/create-tabella.dto';
import { UpdateTabellaDto } from './dto/update-tabella.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class TabelleService {
  constructor(private prisma: PrismaService) {}

  async create(createTabellaDto: CreateTabellaDto) {
    const { condominioId, ripartizioneMillesimi, totaleMillesimi, ...rest } = createTabellaDto;

    const condominio = await this.prisma.condominio.findUnique({
      where: { id: condominioId },
      include: { unitaImmobiliari: true },
    });

    if (!condominio) {
      throw new BadRequestException('Condominio not found');
    }

    const numberOfUnitaImmobiliari = condominio.unitaImmobiliari.length;

    if (
      ripartizioneMillesimi.length !== numberOfUnitaImmobiliari ||
      createTabellaDto.percentualeNudaProprieta.length !== numberOfUnitaImmobiliari ||
      createTabellaDto.percentualeUsufrutto.length !== numberOfUnitaImmobiliari ||
      createTabellaDto.percentualeProprieta.length !== numberOfUnitaImmobiliari ||
      createTabellaDto.percentualeConduttore.length !== numberOfUnitaImmobiliari
    ) {
      throw new BadRequestException('Array lengths do not match number of UnitaImmobiliari');
    }

    const sumRipartizioneMillesimi = ripartizioneMillesimi.reduce((acc, val) => acc + val, 0);
    if (sumRipartizioneMillesimi !== totaleMillesimi) {
      throw new BadRequestException('Sum of ripartizioneMillesimi does not match totaleMillesimi');
    }

    const data: Prisma.TabellaCreateInput = {
      ...rest,
      ripartizioneMillesimi,
      totaleMillesimi,
      condominio: {
        connect: { id: condominioId },
      },
    };
    return this.prisma.tabella.create({ data });
  }

  async findAll() {
    return this.prisma.tabella.findMany();
  }

  async findOne(id: number) {
    return this.prisma.tabella.findUnique({
      where: { id },
    });
  }

  async findOneWithRelations(id: number) {
    return this.prisma.tabella.findUnique({
      where: { id },
      include: {
        contiMastro: true,
      },
    });
  }

  async update(id: number, updateTabellaDto: UpdateTabellaDto) {
    const { condominioId, ripartizioneMillesimi, totaleMillesimi, ...rest } = updateTabellaDto;

    const condominio = await this.prisma.condominio.findUnique({
      where: { id: condominioId },
      include: { unitaImmobiliari: true },
    });

    if (!condominio) {
      throw new BadRequestException('Condominio not found');
    }

    const numberOfUnitaImmobiliari = condominio.unitaImmobiliari.length;

    if (
      ripartizioneMillesimi.length !== numberOfUnitaImmobiliari ||
      updateTabellaDto.percentualeNudaProprieta.length !== numberOfUnitaImmobiliari ||
      updateTabellaDto.percentualeUsufrutto.length !== numberOfUnitaImmobiliari ||
      updateTabellaDto.percentualeProprieta.length !== numberOfUnitaImmobiliari ||
      updateTabellaDto.percentualeConduttore.length !== numberOfUnitaImmobiliari
    ) {
      throw new BadRequestException('Array lengths do not match number of UnitaImmobiliari');
    }

    const sumRipartizioneMillesimi = ripartizioneMillesimi.reduce((acc, val) => acc + val, 0);
    if (sumRipartizioneMillesimi !== totaleMillesimi) {
      throw new BadRequestException('Sum of ripartizioneMillesimi does not match totaleMillesimi');
    }

    const data: Prisma.TabellaUpdateInput = {
      ...rest,
      ripartizioneMillesimi,
      totaleMillesimi,
      condominio: {
        connect: { id: condominioId },
      },
    };
    return this.prisma.tabella.update({
      where: { id },
      data,
    });
  }

  async remove(id: number) {
    return this.prisma.tabella.delete({ where: { id } });
  }
}
