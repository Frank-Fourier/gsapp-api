// src/movimenti/movimenti.service.ts
import { Injectable } from '@nestjs/common';
import { CreateMovimentoDto } from './dto/create-movimento.dto';
import { UpdateMovimentoDto } from './dto/update-movimento.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class MovimentiService {
  constructor(private prisma: PrismaService) {}

  create(createMovimentoDto: CreateMovimentoDto) {
    const { condominioId, gestioneId, ...rest } = createMovimentoDto;
    const data: Prisma.MovimentoCreateInput = {
      ...rest,
      condominio: { connect: { id: condominioId } },
      gestione: gestioneId ? { connect: { id: gestioneId } } : undefined,
    };
    return this.prisma.movimento.create({ data });
  }

  findAll() {
    return this.prisma.movimento.findMany();
  }

  findOne(id: number) {
    return this.prisma.movimento.findUnique({
      where: { id },
    });
  }

  findOneWithTransazioni(id: number) {
    return this.prisma.movimento.findUnique({
      where: { id },
      include: {
        transazione: true,
      },
    });
  }

  update(id: number, updateMovimentoDto: UpdateMovimentoDto) {
    const { condominioId, gestioneId, ...rest } = updateMovimentoDto;
    const data: Prisma.MovimentoUpdateInput = {
      ...rest,
      condominio: { connect: { id: condominioId } },
      gestione: gestioneId ? { connect: { id: gestioneId } } : undefined,
    };
    return this.prisma.movimento.update({
      where: { id },
      data,
    });
  }

  remove(id: number) {
    return this.prisma.movimento.delete({
      where: { id },
    });
  }
}
