// src/unita-immobiliari/unita-immobiliari.service.ts
import { Injectable } from '@nestjs/common';
import { CreateUnitaImmobiliareDto } from './dto/create-unita-immobiliare.dto';
import { UpdateUnitaImmobiliareDto } from './dto/update-unita-immobiliare.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class UnitaImmobiliariService {
  constructor(private prisma: PrismaService) {}

  create(createUnitaImmobiliareDto: CreateUnitaImmobiliareDto) {
    const data: Prisma.UnitaImmobiliareCreateInput = {
      ...createUnitaImmobiliareDto,
      condominio: {
        connect: { id: createUnitaImmobiliareDto.condominioId },
      },
    };
    return this.prisma.unitaImmobiliare.create({ data });
  }

  findAll() {
    return this.prisma.unitaImmobiliare.findMany();
  }

  findOne(id: number) {
    return this.prisma.unitaImmobiliare.findUnique({
      where: { id },
    });
  }

  update(id: number, updateUnitaImmobiliareDto: UpdateUnitaImmobiliareDto) {
    const data: Prisma.UnitaImmobiliareUpdateInput = {
      ...updateUnitaImmobiliareDto,
      condominio: {
        connect: { id: updateUnitaImmobiliareDto.condominioId },
      },
    };
    return this.prisma.unitaImmobiliare.update({
      where: { id },
      data,
    });
  }

  remove(id: number) {
    return this.prisma.unitaImmobiliare.delete({ where: { id } });
  }
}
