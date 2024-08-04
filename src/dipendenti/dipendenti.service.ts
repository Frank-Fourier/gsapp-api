// src/dipendenti/dipendenti.service.ts
import { Injectable } from '@nestjs/common';
import { CreateDipendenteDto } from './dto/create-dipendente.dto';
import { UpdateDipendenteDto } from './dto/update-dipendente.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class DipendentiService {
  constructor(private prisma: PrismaService) {}

  create(createDipendenteDto: CreateDipendenteDto) {
    const data: Prisma.DipendenteCreateInput = {
      ...createDipendenteDto,
      amministratore: {
        connect: { id: createDipendenteDto.amministratoreId },
      },
    };
    return this.prisma.dipendente.create({ data });
  }

  findAll() {
    return this.prisma.dipendente.findMany();
  }

  findOne(id: number) {
    return this.prisma.dipendente.findUnique({
      where: { id },
    });
  }

  update(id: number, updateDipendenteDto: UpdateDipendenteDto) {
    const data: Prisma.DipendenteUpdateInput = {
      ...updateDipendenteDto,
      amministratore: {
        connect: { id: updateDipendenteDto.amministratoreId },
      },
    };
    return this.prisma.dipendente.update({
      where: { id },
      data,
    });
  }

  remove(id: number) {
    return this.prisma.dipendente.delete({ where: { id } });
  }
}
