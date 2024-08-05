// src/dati-patrimoniali-iniziali/dati-patrimoniali-iniziali.service.ts
import { Injectable } from '@nestjs/common';
import { CreateDatiPatrimonialiInizialiDto } from './dto/create-dati-patrimoniali-iniziali.dto';
import { UpdateDatiPatrimonialiInizialiDto } from './dto/update-dati-patrimoniali-iniziali.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class DatiPatrimonialiInizialiService {
  constructor(private prisma: PrismaService) {}

  create(createDatiPatrimonialiInizialiDto: CreateDatiPatrimonialiInizialiDto) {
    const { condominioId, ...rest } = createDatiPatrimonialiInizialiDto;
    const data: Prisma.DatiPatrimonialiInizialiCreateInput = {
      ...rest,
      condominio: { connect: { id: condominioId } },
    };
    return this.prisma.datiPatrimonialiIniziali.create({ data });
  }

  findAll() {
    return this.prisma.datiPatrimonialiIniziali.findMany();
  }

  findOne(id: number) {
    return this.prisma.datiPatrimonialiIniziali.findUnique({
      where: { id },
    });
  }

  update(id: number, updateDatiPatrimonialiInizialiDto: UpdateDatiPatrimonialiInizialiDto) {
    const { condominioId, ...rest } = updateDatiPatrimonialiInizialiDto;
    const data: Prisma.DatiPatrimonialiInizialiUpdateInput = {
      ...rest,
      condominio: { connect: { id: condominioId } },
    };
    return this.prisma.datiPatrimonialiIniziali.update({
      where: { id },
      data,
    });
  }

  remove(id: number) {
    return this.prisma.datiPatrimonialiIniziali.delete({ where: { id } });
  }
}
