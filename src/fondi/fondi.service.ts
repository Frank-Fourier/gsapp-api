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
    const { condominioId, ...rest } = createFondoDto;
    const data: Prisma.FondoCreateInput = {
      ...rest,
      condominio: {
        connect: { id: condominioId },
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

  findOneWithTransazioni(id: number) {
    return this.prisma.fondo.findUnique({
      where: { id },
      include: { transazioni: true }, // Include related transazioni
    });
  }

  update(id: number, updateFondoDto: UpdateFondoDto) {
    const { condominioId, ...rest } = updateFondoDto;
    const data: Prisma.FondoUpdateInput = {
      ...rest,
      condominio: {
        connect: { id: condominioId },
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
