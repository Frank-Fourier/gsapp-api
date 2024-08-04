// src/tabelle/tabelle.service.ts
import { Injectable } from '@nestjs/common';
import { CreateTabellaDto } from './dto/create-tabella.dto';
import { UpdateTabellaDto } from './dto/update-tabella.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class TabelleService {
  constructor(private prisma: PrismaService) {}

  create(createTabellaDto: CreateTabellaDto) {
    const data: Prisma.TabellaCreateInput = {
      ...createTabellaDto,
      condominio: {
        connect: { id: createTabellaDto.condominioId },
      },
    };
    return this.prisma.tabella.create({ data });
  }

  findAll() {
    return this.prisma.tabella.findMany();
  }

  findOne(id: number) {
    return this.prisma.tabella.findUnique({
      where: { id },
    });
  }

  update(id: number, updateTabellaDto: UpdateTabellaDto) {
    const data: Prisma.TabellaUpdateInput = {
      ...updateTabellaDto,
      condominio: {
        connect: { id: updateTabellaDto.condominioId },
      },
    };
    return this.prisma.tabella.update({
      where: { id },
      data,
    });
  }

  remove(id: number) {
    return this.prisma.tabella.delete({ where: { id } });
  }
}
