import { Injectable } from '@nestjs/common';
import { CreatePreventivoDto } from './dto/create-preventivo.dto';
import { UpdatePreventivoDto } from './dto/update-preventivo.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { addMonths } from 'date-fns';

@Injectable()
export class PreventiviService {
  constructor(private prisma: PrismaService) {}

  async create(createPreventivoDto: CreatePreventivoDto) {
    const { gestioneId, contoMastroId, importo, numeroRate, ...rest } = createPreventivoDto;
    
    // Retrieve the related ContoMastro and Tabella
    const contoMastro = await this.prisma.contoMastro.findUnique({
      where: { id: contoMastroId },
      include: {
        tabella: {
          include: {
            condominio: {
              include: { unitaImmobiliari: true }
            }
          }
        }
      }
    });

    if (!contoMastro || !contoMastro.tabella) {
      throw new Error('ContoMastro or Tabella not found');
    }

    const tabella = contoMastro.tabella;
    const ripartizioneMillesimi = tabella.ripartizioneMillesimi;
    const unitaImmobiliari = tabella.condominio.unitaImmobiliari;
    const condominioId = tabella.condominioId;

    // Calculate the amounts for each UnitaImmobiliare
    const movimentiData = [];
    const dataEmissione = new Date();

    for (let i = 0; i < unitaImmobiliari.length; i++) {
      const unitaImmobiliare = unitaImmobiliari[i];
      const millesimi = ripartizioneMillesimi[i];
      const unitaImporto = (importo * millesimi) / 1000;

      for (let j = 0; j < numeroRate; j++) {
        const dataScadenza = addMonths(dataEmissione, (j + 1) * (12 / numeroRate));
        movimentiData.push({
          tipologia: 'DEBITO',
          dataEmissione,
          dataScadenza,
          importo: unitaImporto / numeroRate,
          unitaImmobiliareId: unitaImmobiliare.id,
          condominioId: condominioId,
          gestioneId: gestioneId,
        });
      }
    }

    // Create the Preventivo
    const preventivo = await this.prisma.preventivo.create({
      data: {
        ...rest,
        importo,
        numeroRate,
        gestione: { connect: { id: gestioneId } },
        contoMastro: { connect: { id: contoMastroId } }
      }
    });

    // Create Movimenti using createMany
    try {
      await this.prisma.movimento.createMany({
        data: movimentiData
      });
    } catch (error) {
      console.error(error);
      // Rollback Preventivo creation if Movimenti creation fails
      await this.prisma.preventivo.delete({
        where: { id: preventivo.id }
      });
      throw new Error('Failed to create Movimenti. Preventivo creation rolled back.');
    }

    return preventivo;
  }

  findAll() {
    return this.prisma.preventivo.findMany();
  }

  findOne(id: number) {
    return this.prisma.preventivo.findUnique({
      where: { id },
    });
  }

  findOneWithRelations(id: number) {
    return this.prisma.preventivo.findUnique({
      where: { id },
      include: {
        gestione: true,
        contoMastro: true,
      },
    });
  }

  update(id: number, updatePreventivoDto: UpdatePreventivoDto) {
    const { gestioneId, contoMastroId, ...rest } = updatePreventivoDto;
    const data: Prisma.PreventivoUpdateInput = {
      ...rest,
      gestione: { connect: { id: gestioneId } },
      contoMastro: { connect: { id: contoMastroId } },
    };
    return this.prisma.preventivo.update({
      where: { id },
      data,
    });
  }

  remove(id: number) {
    return this.prisma.preventivo.delete({
      where: { id },
    });
  }
}
