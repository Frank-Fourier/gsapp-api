import { Injectable } from '@nestjs/common';
import { CreateAnagraficaDto } from './dto/create-anagrafica.dto';
import { UpdateAnagraficaDto } from './dto/update-anagrafica.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AnagraficheService {
  constructor(private prisma: PrismaService) {}

  create(createAnagraficaDto: CreateAnagraficaDto) {
    return this.prisma.anagrafica.create({
      data: createAnagraficaDto,
    });
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
    return this.prisma.anagrafica.update({
      where: { id },
      data: updateAnagraficaDto,
    });
  }

  remove(id: number) {
    return this.prisma.anagrafica.delete({ where: { id } });
  }
}
