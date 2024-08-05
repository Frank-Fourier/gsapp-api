// src/fornitori/fornitori.service.ts
import { Injectable } from '@nestjs/common';
import { CreateFornitoreDto } from './dto/create-fornitore.dto';
import { UpdateFornitoreDto } from './dto/update-fornitore.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class FornitoriService {
  constructor(private prisma: PrismaService) {}

  create(createFornitoreDto: CreateFornitoreDto) {
    const { amministratoreId, ...rest } = createFornitoreDto;
    const data: Prisma.FornitoreCreateInput = {
      ...rest,
      amministratore: {
        connect: { id: amministratoreId },
      },
    };
    return this.prisma.fornitore.create({ data });
  }

  findAll() {
    return this.prisma.fornitore.findMany();
  }

  findOne(id: number) {
    return this.prisma.fornitore.findUnique({
      where: { id },
    });
  }

  update(id: number, updateFornitoreDto: UpdateFornitoreDto) {
    const { amministratoreId, ...rest } = updateFornitoreDto;
    const data: Prisma.FornitoreUpdateInput = {
      ...rest,
      amministratore: {
        connect: { id: amministratoreId },
      },
    };
    return this.prisma.fornitore.update({
      where: { id },
      data,
    });
  }

  remove(id: number) {
    return this.prisma.fornitore.delete({ where: { id } });
  }
}
