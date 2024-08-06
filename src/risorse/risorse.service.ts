// src/risorsa/risorsa.service.ts
import { Injectable } from '@nestjs/common';
import { CreateRisorsaDto } from './dto/create-risorsa.dto';
import { UpdateRisorsaDto } from './dto/update-risorsa.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class RisorseService {
  constructor(private prisma: PrismaService) {}

  create(createRisorsaDto: CreateRisorsaDto) {
    const { condominioId, ...rest } = createRisorsaDto;
    const data: Prisma.RisorsaCreateInput = {
      ...rest,
      condominio: {
        connect: { id: condominioId },
      },
    };
    return this.prisma.risorsa.create({ data });
  }

  findAll() {
    return this.prisma.risorsa.findMany();
  }

  findOne(id: number) {
    return this.prisma.risorsa.findUnique({
      where: { id },
    });
  }

  findOneWithTransazioni(id: number) {
    return this.prisma.risorsa.findUnique({
      where: { id },
      include: { transazioni: true },
    });
  }

  findOneWithDetails(id: number) {
    return this.prisma.risorsa.findUnique({
      where: { id },
      include: {
        transazioni: true,
        estrattiConto: true,
      },
    });
  }

  update(id: number, updateRisorsaDto: UpdateRisorsaDto) {
    const { condominioId, ...rest } = updateRisorsaDto;
    const data: Prisma.RisorsaUpdateInput = {
      ...rest,
      condominio: {
        connect: { id: condominioId },
      },
    };
    return this.prisma.risorsa.update({
      where: { id },
      data,
    });
  }

  remove(id: number) {
    return this.prisma.risorsa.delete({ where: { id } });
  }
}
