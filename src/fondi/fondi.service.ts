// src/fondi/fondi.service.ts
import { Injectable } from '@nestjs/common';
import { CreateFondoDto } from './dto/create-fondo.dto';
import { UpdateFondoDto } from './dto/update-fondo.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class FondiService {
  constructor(private prisma: PrismaService) {}

  create(createFondoDto: CreateFondoDto) {
    const data: Prisma.FondoCreateInput = {
      ...createFondoDto,
      condominio: {
        connect: { id: createFondoDto.condominioId },
      },
    };
    return this.prisma.fondo.create({ data });
  }

  findAll() {
    return this.prisma.fondo.findMany();
  }

  findOne(id: number) {
    return this.prisma.fondo.findUnique({
      where: { id },
    });
  }

  update(id: number, updateFondoDto: UpdateFondoDto) {
    const data: Prisma.FondoUpdateInput = {
      ...updateFondoDto,
      condominio: {
        connect: { id: updateFondoDto.condominioId },
      },
    };
    return this.prisma.fondo.update({
      where: { id },
      data,
    });
  }

  remove(id: number) {
    return this.prisma.fondo.delete({ where: { id } });
  }
}
