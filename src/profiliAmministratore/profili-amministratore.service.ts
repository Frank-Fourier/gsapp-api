import { Injectable } from '@nestjs/common';
import { CreateProfiloAmministratoreDto } from './dto/create-profilo-amministratore.dto';
import { UpdateProfiloAmministratoreDto } from './dto/update-profilo-amministratore.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class ProfiliAmministratoreService {
  constructor(private prisma: PrismaService) {}

  create(createProfiloAmministratoreDto: CreateProfiloAmministratoreDto) {
    const data: Prisma.ProfiloAmministratoreCreateInput = {
      ...createProfiloAmministratoreDto,
    };
    return this.prisma.profiloAmministratore.create({ data });
  }

  findAll() {
    return this.prisma.profiloAmministratore.findMany();
  }

  findOne(id: number) {
    return this.prisma.profiloAmministratore.findUnique({
      where: { id },
    });;
  }

  findOneWithRelations(id: number) {
    return this.prisma.profiloAmministratore.findUnique({
      where: { id },
      include: {
        anagrafiche: true,
        fornitori: true,
        dipendenti: true,
        condomini: true,
      },
    });
  }

  update(id: number, updateProfiloAmministratoreDto: UpdateProfiloAmministratoreDto) {
    const data: Prisma.ProfiloAmministratoreUpdateInput = {
      ...updateProfiloAmministratoreDto,
    };
    return this.prisma.profiloAmministratore.update({
      where: { id },
      data,
    });
  }

  remove(id: number) {
    return this.prisma.profiloAmministratore.delete({ where: { id } });
  }
}
