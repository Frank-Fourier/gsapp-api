// src/conti-mastro/conti-mastro.service.ts
import { Injectable } from '@nestjs/common';
import { CreateContoMastroDto } from './dto/create-conto-mastro.dto';
import { UpdateContoMastroDto } from './dto/update-conto-mastro.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class ContiMastroService {
  constructor(private prisma: PrismaService) {}

  create(createContoMastroDto: CreateContoMastroDto) {
    const { condominioId, tabellaId, ...rest } = createContoMastroDto;
    const data: Prisma.ContoMastroCreateInput = {
      ...rest,
      condominio: {
        connect: { id: condominioId },
      },
      tabella: {
        connect: { id: tabellaId },
      },
    };
    return this.prisma.contoMastro.create({ data });
  }

  findAll() {
    return this.prisma.contoMastro.findMany();
  }

  findOne(id: number) {
    return this.prisma.contoMastro.findUnique({
      where: { id },
    });
  }

  findOneWithDetails(id: number) {
    return this.prisma.contoMastro.findUnique({
      where: { id },
      include: {
        preventivi: true,
      },
    });
  }

  update(id: number, updateContoMastroDto: UpdateContoMastroDto) {
    const { condominioId, tabellaId, ...rest } = updateContoMastroDto;
    const data: Prisma.ContoMastroUpdateInput = {
      ...rest,
      condominio: {
        connect: { id: condominioId },
      },
      tabella: {
        connect: { id: tabellaId },
      },
    };
    return this.prisma.contoMastro.update({
      where: { id },
      data,
    });
  }

  remove(id: number) {
    return this.prisma.contoMastro.delete({ where: { id } });
  }
}
