import { PartialType } from '@nestjs/swagger';
import { CreateProfiloAmministratoreDto } from './create-profilo-amministratore.dto';

export class UpdateProfiloAmministratoreDto extends PartialType(CreateProfiloAmministratoreDto) {}
