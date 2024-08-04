// src/anagrafiche/anagrafiche.service.ts
import { Injectable } from '@nestjs/common';
import { CreateAnagraficaDto } from './dto/create-anagrafica.dto';
import { UpdateAnagraficaDto } from './dto/update-anagrafica.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class AnagraficheService {
  constructor(private prisma: PrismaService) {}

  create(createAnagraficaDto: CreateAnagraficaDto) {
    const data: Prisma.AnagraficaCreateInput = {
      ...createAnagraficaDto,
      amministratore: {
        connect: { id: createAnagraficaDto.amministratoreId },
      },
    };
    return this.prisma.anagrafica.create({ data });
  }

  findAll() {
    return this.prisma.anagrafica.findMany();
  }

  findOne(id: number) {
    return this.prisma.anagrafica.findUnique({
      where: { id },
    });
  }

  update(id: number, updateAnagraficaDto: UpdateAnagraficaDto) {
    const data: Prisma.AnagraficaUpdateInput = {
      ...updateAnagraficaDto,
      amministratore: {
        connect: { id: updateAnagraficaDto.amministratoreId },
      },
    };
    return this.prisma.anagrafica.update({
      where: { id },
      data,
    });
  }

  remove(id: number) {
    return this.prisma.anagrafica.delete({ where: { id } });
  }
}
