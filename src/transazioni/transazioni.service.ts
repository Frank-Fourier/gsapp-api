// src/transazioni/transazioni.service.ts
import { Injectable } from '@nestjs/common';
import { CreateTransazioneDto } from './dto/create-transazione.dto';
import { UpdateTransazioneDto } from './dto/update-transazione.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class TransazioniService {
  constructor(private prisma: PrismaService) {}

  create(createTransazioneDto: CreateTransazioneDto) {
    const { condominioId, unitaImmobiliareId, risorsaId, fondoId, ...rest } = createTransazioneDto;
    const data: Prisma.TransazioneCreateInput = {
      ...rest,
      condominio: { connect: { id: condominioId } },
      unitaImmobiliare: unitaImmobiliareId ? { connect: { id: unitaImmobiliareId } } : undefined,
      risorsa: { connect: { id: risorsaId } },
      fondo: fondoId ? { connect: { id: fondoId } } : undefined,
    };
    return this.prisma.transazione.create({ data });
  }

  findAll() {
    return this.prisma.transazione.findMany();
  }

  findOne(id: number) {
    return this.prisma.transazione.findUnique({
      where: { id },
    });
  }

  update(id: number, updateTransazioneDto: UpdateTransazioneDto) {
    const { condominioId, unitaImmobiliareId, risorsaId, fondoId, ...rest } = updateTransazioneDto;
    const data: Prisma.TransazioneUpdateInput = {
      ...rest,
      condominio: { connect: { id: condominioId } },
      unitaImmobiliare: unitaImmobiliareId ? { connect: { id: unitaImmobiliareId } } : undefined,
      risorsa: { connect: { id: risorsaId } },
      fondo: fondoId ? { connect: { id: fondoId } } : undefined,
    };
    return this.prisma.transazione.update({
      where: { id },
      data,
    });
  }

  remove(id: number) {
    return this.prisma.transazione.delete({ where: { id } });
  }
}
