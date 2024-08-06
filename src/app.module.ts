import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { ProfiliAmministratoreModule } from './profiliAmministratore/profili-amministratore.module';
import { AnagraficheModule } from './anagrafiche/anagrafiche.module';
import { FornitoriModule } from './fornitori/fornitori.module';
import { DipendentiModule } from './dipendenti/dipendenti.module';
import { CondominiModule } from './condomini/condomini.module';
import { UnitaImmobiliariModule } from './unitaImmobiliari/unita-immobiliari.module';
import { TabelleModule } from './tabelle/tabelle.module';
import { ContiMastroModule } from './contiMastro/conti-mastro.module';
import { RisorseModule } from './risorse/risorse.module';
import { FondiModule } from './fondi/fondi.module';
import { TransazioniModule } from './transazioni/transazioni.module';
import { ApiModule } from './services/api.module';
import { EstrattiContoModule } from './estrattiConto/estratti-conto.module';
import { GestioniModule } from './gestioni/gestioni.module';
import { PreventiviModule } from './preventivi/preventivi.module';
import { MovimentiModule } from './movimenti/movimenti.module';

@Module({
  imports: [
    PrismaModule,
    ProfiliAmministratoreModule,
    AnagraficheModule,
    FornitoriModule,
    DipendentiModule,
    CondominiModule,
    UnitaImmobiliariModule,
    TabelleModule,
    ContiMastroModule,
    RisorseModule,
    FondiModule,
    TransazioniModule,
    ApiModule,
    EstrattiContoModule,
    GestioniModule, 
    PreventiviModule,
    MovimentiModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
