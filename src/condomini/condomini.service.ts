// src/condomini/condomini.service.ts
import { Injectable } from '@nestjs/common';
import { CreateCondominioDto } from './dto/create-condominio.dto';
import { UpdateCondominioDto } from './dto/update-condominio.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class CondominiService {
  constructor(private prisma: PrismaService) { }

  create(createCondominioDto: CreateCondominioDto) {
    const { amministratoreId, ...rest } = createCondominioDto;
    const data: Prisma.CondominioCreateInput = {
      ...rest,
      amministratore: {
        connect: { id: amministratoreId },
      },
    };
    return this.prisma.condominio.create({ data });
  }

  findAll() {
    return this.prisma.condominio.findMany();
  }

  findOne(id: number) {
    return this.prisma.condominio.findUnique({
      where: { id },
    });
  }

  findOneWithRelations(id: number) {
    return this.prisma.condominio.findUnique({
      where: { id },
      include: {
        datiPatrimonialiIniziali: true,
        unitaImmobiliari: true,
        tabelle: true,
        contiMastro: true,
        risorse: true,
        fondi: true,
        transazioni: true,
        gestioni: true,
      },
    });
  }

  update(id: number, updateCondominioDto: UpdateCondominioDto) {
    const { amministratoreId, ...rest } = updateCondominioDto;
    const data: Prisma.CondominioUpdateInput = {
      ...rest,
      amministratore: {
        connect: { id: amministratoreId },
      },
    };
    return this.prisma.condominio.update({
      where: { id },
      data,
    });
  }

  remove(id: number) {
    return this.prisma.condominio.delete({ where: { id } });
  }
}
