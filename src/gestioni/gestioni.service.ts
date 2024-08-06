// src/gestioni/gestioni.service.ts
import { Injectable, BadRequestException } from '@nestjs/common';
import { CreateGestioneDto } from './dto/create-gestione.dto';
import { UpdateGestioneDto } from './dto/update-gestione.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class GestioniService {
  constructor(private prisma: PrismaService) {}

  async create(createGestioneDto: CreateGestioneDto) {
    const { gestionePrecedenteId, condominioId, ...rest } = createGestioneDto;
    
    const newGestione = await this.prisma.gestione.create({
      data: {
        ...rest,
        gestionePrecedente: gestionePrecedenteId
          ? { connect: { id: gestionePrecedenteId } }
          : undefined,
        condominio: { connect: { id: condominioId } },
      },
    });

    if (gestionePrecedenteId) {
      const gestionePrecedente = await this.prisma.gestione.findUnique({
        where: { id: gestionePrecedenteId },
        include: { movimenti: { where: { dataPagamento: null } } },
      });

      const movimentiIds = gestionePrecedente.movimenti.map(movimento => movimento.id);

      // Link the existing movimenti to the new gestione without modifying them
      for (const movimentoId of movimentiIds) {
        await this.prisma.gestioneMovimento.create({
          data: {
            gestioneId: newGestione.id,
            movimentoId,
          },
        });
      }
    }

    return newGestione;
  }

  async findAll() {
    return this.prisma.gestione.findMany();
  }

  async findOne(id: number) {
    return this.prisma.gestione.findUnique({
      where: { id },
    });
  }

  async findOneWithRelations(id: number) {
    return this.prisma.gestione.findUnique({
      where: { id },
      include: {
        movimenti: true,
        estrattiConto: true,
        preventivi: true,
        transazioni: true,
      },
    });
  }

  async update(id: number, updateGestioneDto: UpdateGestioneDto) {
    const { gestionePrecedenteId, condominioId, ...rest } = updateGestioneDto;

    const gestione = await this.prisma.gestione.findUnique({ where: { id } });
    if (gestione.dataFineGestione) {
      throw new BadRequestException('Cannot update an archived gestione');
    }

    const data: Prisma.GestioneUpdateInput = {
      ...rest,
      gestionePrecedente: gestionePrecedenteId
        ? { connect: { id: gestionePrecedenteId } }
        : undefined,
      condominio: { connect: { id: condominioId } },
    };

    return this.prisma.gestione.update({
      where: { id },
      data,
    });
  }

  async remove(id: number) {
    return this.prisma.gestione.delete({
      where: { id },
    });
  }
}
