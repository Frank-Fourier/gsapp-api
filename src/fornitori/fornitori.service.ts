// src/fornitori/fornitori.service.ts
import { Injectable } from '@nestjs/common';
import { CreateFornitoreDto } from './dto/create-fornitore.dto';
import { UpdateFornitoreDto } from './dto/update-fornitore.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FornitoriService {
  constructor(private prisma: PrismaService) {}

  create(createFornitoreDto: CreateFornitoreDto) {
    return this.prisma.fornitore.create({
      data: createFornitoreDto,
    });
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
    return this.prisma.fornitore.update({
      where: { id },
      data: updateFornitoreDto,
    });
  }

  remove(id: number) {
    return this.prisma.fornitore.delete({ where: { id } });
  }
}
