import { Injectable } from '@nestjs/common';
import { CreateAnagraficaDto } from './dto/create-anagrafica.dto';
import { UpdateAnagraficaDto } from './dto/update-anagrafica.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class AnagraficheService {
  constructor(private prisma: PrismaService) {}

  create(createAnagraficaDto: CreateAnagraficaDto) {
    const { amministratoreId, ...rest } = createAnagraficaDto;
    const data: Prisma.AnagraficaCreateInput = {
      ...rest,
      amministratore: {
        connect: { id: amministratoreId },
      },
    };
    return this.prisma.anagrafica.create({ data });
  }

  findAll() {
    return this.prisma.anagrafica.findMany();
  }

  findOne(id: number) {
    return this.prisma.anagrafica.findUnique({
      where: { id },
    });
  }

  update(id: number, updateAnagraficaDto: UpdateAnagraficaDto) {
    const { amministratoreId, ...rest } = updateAnagraficaDto;
    const data: Prisma.AnagraficaUpdateInput = {
      ...rest,
      amministratore: {
        connect: { id: amministratoreId },
      },
    };
    return this.prisma.anagrafica.update({
      where: { id },
      data,
    });
  }

  remove(id: number) {
    return this.prisma.anagrafica.delete({ where: { id } });
  }
}
