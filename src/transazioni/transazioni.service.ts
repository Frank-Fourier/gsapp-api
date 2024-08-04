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
    const data: Prisma.TransazioneCreateInput = {
      ...createTransazioneDto,
      condominio: { connect: { id: createTransazioneDto.condominioId } },
      unitaImmobiliare: createTransazioneDto.unitaImmobiliareId
        ? { connect: { id: createTransazioneDto.unitaImmobiliareId } }
        : undefined,
      risorsa: { connect: { id: createTransazioneDto.risorsaId } },
      fondo: createTransazioneDto.fondoId ? { connect: { id: createTransazioneDto.fondoId } } : undefined,
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
    const data: Prisma.TransazioneUpdateInput = {
      ...updateTransazioneDto,
      condominio: { connect: { id: updateTransazioneDto.condominioId } },
      unitaImmobiliare: updateTransazioneDto.unitaImmobiliareId
        ? { connect: { id: updateTransazioneDto.unitaImmobiliareId } }
        : undefined,
      risorsa: { connect: { id: updateTransazioneDto.risorsaId } },
      fondo: updateTransazioneDto.fondoId ? { connect: { id: updateTransazioneDto.fondoId } } : undefined,
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
