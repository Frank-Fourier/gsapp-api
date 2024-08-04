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
    const data: Prisma.ContoMastroCreateInput = {
      ...createContoMastroDto,
      condominio: {
        connect: { id: createContoMastroDto.condominioId },
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

  update(id: number, updateContoMastroDto: UpdateContoMastroDto) {
    const data: Prisma.ContoMastroUpdateInput = {
      ...updateContoMastroDto,
      condominio: {
        connect: { id: updateContoMastroDto.condominioId },
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
