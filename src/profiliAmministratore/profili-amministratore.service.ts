import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProfiloAmministratoreDto } from './dto/create-profilo-amministratore.dto';
import { UpdateProfiloAmministratoreDto } from './dto/update-profilo-amministratore.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class ProfiliAmministratoreService {
  constructor(private prisma: PrismaService) {}

  async create(createProfiloAmministratoreDto: CreateProfiloAmministratoreDto) {
    const data: Prisma.ProfiloAmministratoreCreateInput = {
      ...createProfiloAmministratoreDto,
    };
    return this.prisma.profiloAmministratore.create({ data });
  }

  async findAll() {
    return this.prisma.profiloAmministratore.findMany();
  }

  async findOne(id: number) {
    const profiloAmministratore = await this.prisma.profiloAmministratore.findUnique({
      where: { id },
    });
    if (!profiloAmministratore) {
      throw new NotFoundException(`ProfiloAmministratore with ID ${id} not found.`);
    }
    return profiloAmministratore;
  }

  async update(id: number, updateProfiloAmministratoreDto: UpdateProfiloAmministratoreDto) {
    const data: Prisma.ProfiloAmministratoreUpdateInput = {
      ...updateProfiloAmministratoreDto,
    };
    return this.prisma.profiloAmministratore.update({
      where: { id },
      data,
    });
  }

  async remove(id: number) {
    return this.prisma.profiloAmministratore.delete({ where: { id } });
  }
}
