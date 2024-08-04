// src/condomini/condomini.service.ts
import { Injectable } from '@nestjs/common';
import { CreateCondominioDto } from './dto/create-condominio.dto';
import { UpdateCondominioDto } from './dto/update-condominio.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class CondominiService {
  constructor(private prisma: PrismaService) {}

  create(createCondominioDto: CreateCondominioDto) {
    const data: Prisma.CondominioCreateInput = {
      ...createCondominioDto,
      amministratore: {
        connect: { id: createCondominioDto.amministratoreId },
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

  update(id: number, updateCondominioDto: UpdateCondominioDto) {
    const data: Prisma.CondominioUpdateInput = {
      ...updateCondominioDto,
      amministratore: {
        connect: { id: updateCondominioDto.amministratoreId },
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
