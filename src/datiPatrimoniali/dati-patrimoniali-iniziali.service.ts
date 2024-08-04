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
    const data: Prisma.DatiPatrimonialiInizialiCreateInput = {
      ...createDatiPatrimonialiInizialiDto,
      condominio: { connect: { id: createDatiPatrimonialiInizialiDto.condominioId } },
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
    const data: Prisma.DatiPatrimonialiInizialiUpdateInput = {
      ...updateDatiPatrimonialiInizialiDto,
      condominio: { connect: { id: updateDatiPatrimonialiInizialiDto.condominioId } },
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
