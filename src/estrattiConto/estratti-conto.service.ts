// src/estratti-conto/estratti-conto.service.ts
import { Injectable } from '@nestjs/common';
import { CreateEstrattoContoDto } from './dto/create-estratto-conto.dto';
import { UpdateEstrattoContoDto } from './dto/update-estratto-conto.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class EstrattiContoService {
  constructor(private prisma: PrismaService) {}

  create(createEstrattoContoDto: CreateEstrattoContoDto) {
    const { gestioneId, risorsaId, fondoId, ...rest } = createEstrattoContoDto;
    const data: Prisma.EstrattoContoCreateInput = {
      ...rest,
      gestione: {
        connect: { id: gestioneId },
      },
      risorsa: risorsaId ? { connect: { id: risorsaId } } : undefined,
      fondo: fondoId ? { connect: { id: fondoId } } : undefined,
    };
    return this.prisma.estrattoConto.create({ data });
  }

  findAll() {
    return this.prisma.estrattoConto.findMany();
  }

  findOne(id: number) {
    return this.prisma.estrattoConto.findUnique({
      where: { id },
    });
  }

  update(id: number, updateEstrattoContoDto: UpdateEstrattoContoDto) {
    const { gestioneId, risorsaId, fondoId, ...rest } = updateEstrattoContoDto;
    const data: Prisma.EstrattoContoUpdateInput = {
      ...rest,
      gestione: {
        connect: { id: gestioneId },
      },
      risorsa: risorsaId ? { connect: { id: risorsaId } } : undefined,
      fondo: fondoId ? { connect: { id: fondoId } } : undefined,
    };
    return this.prisma.estrattoConto.update({
      where: { id },
      data,
    });
  }

  remove(id: number) {
    return this.prisma.estrattoConto.delete({
      where: { id },
    });
  }
}
