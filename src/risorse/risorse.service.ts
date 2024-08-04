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
    const data: Prisma.RisorsaCreateInput = {
      ...createRisorsaDto,
      condominio: {
        connect: { id: createRisorsaDto.condominioId },
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

  update(id: number, updateRisorsaDto: UpdateRisorsaDto) {
    const data: Prisma.RisorsaUpdateInput = {
      ...updateRisorsaDto,
      condominio: {
        connect: { id: updateRisorsaDto.condominioId },
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
