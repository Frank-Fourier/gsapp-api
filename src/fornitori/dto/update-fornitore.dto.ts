import { PartialType } from '@nestjs/swagger';
import { CreateAnagraficaDto } from './create-anagrafica.dto';

export class UpdateAnagraficaDto extends PartialType(CreateAnagraficaDto) {}
