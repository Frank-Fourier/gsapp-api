-- CreateEnum
CREATE TYPE "TipologiaRitenuta" AS ENUM ('QUATTRO', 'VENTI', 'VENTITRE', 'ZERO');

-- CreateEnum
CREATE TYPE "CausaliSomme" AS ENUM ('AUTONOMO', 'CU', 'MONOMANDATARIO', 'PLURIMANDATARIO', 'COMMISSIONARIO', 'MEDIATORE', 'PROCACCIATORE', 'APPALTATORE', 'DIVERSI', 'OCCASIONALE', 'PROFESSIONISTA');

-- CreateEnum
CREATE TYPE "TipologiaCondominio" AS ENUM ('PREVALENZA_RESIDENZIALE', 'STANDARD', 'RESIDENZIALE', 'COMMERCIALE', 'PREVALENZA_COMMERCIALE', 'SUPER', 'MINIMO', 'MULTIPROPREITA');

-- CreateEnum
CREATE TYPE "TipologiaAnagrafica" AS ENUM ('FISICA', 'GIURIDICAPERSONE', 'GIURIDICACAPITALI');

-- CreateEnum
CREATE TYPE "TipologiaCassa" AS ENUM ('QUATTRO', 'CINQUE', 'ZERO');

-- CreateEnum
CREATE TYPE "TipologiaIVA" AS ENUM ('ZERO', 'QUATTRO', 'DIECI', 'VENTIDUE');

-- CreateEnum
CREATE TYPE "TipologiaImmobile" AS ENUM ('A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'A9', 'A10', 'A11', 'B1', 'B2', 'B3', 'B4', 'B5', 'B6', 'B7', 'B8', 'C1', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7', 'D1', 'D2', 'D3', 'D4', 'D5', 'D6', 'D7', 'D8', 'D9', 'D10', 'E1', 'E2', 'E3', 'E4', 'E5', 'E6', 'E7', 'E8', 'E9');

-- CreateEnum
CREATE TYPE "TipologiaFondo" AS ENUM ('CASSA', 'SPECIALI', 'TFR');

-- CreateEnum
CREATE TYPE "TipologiaGestione" AS ENUM ('ORDINARIA', 'STRAORDINARIA', 'UTENZE_PRIVATE');

-- CreateEnum
CREATE TYPE "TipologiaMovimento" AS ENUM ('DEBITO', 'CREDITO');

-- CreateTable
CREATE TABLE "ProfiloAmministratore" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "cognome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "documenti" TEXT[],
    "allegati" TEXT[],
    "logo" TEXT NOT NULL,
    "stato" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ProfiloAmministratore_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Anagrafica" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "emailPec" TEXT NOT NULL,
    "tipologia" "TipologiaAnagrafica" NOT NULL,
    "nome" TEXT NOT NULL,
    "cognome" TEXT NOT NULL,
    "ragioneSociale" TEXT,
    "responsabile" TEXT,
    "codiceFiscale" TEXT NOT NULL,
    "partitaIva" TEXT NOT NULL,
    "nazioneResidenza" TEXT NOT NULL,
    "comuneResidenza" TEXT NOT NULL,
    "indirizzoResidenza" TEXT NOT NULL,
    "capResidenza" TEXT NOT NULL,
    "nazioneDomicilio" TEXT,
    "comuneDomicilio" TEXT,
    "indirizzoDomicilio" TEXT,
    "capDomicilio" TEXT,
    "dataNascita" TIMESTAMP(3) NOT NULL,
    "luogoNascita" TEXT NOT NULL,
    "telefono" TEXT NOT NULL,
    "cellulare" TEXT NOT NULL,
    "note" TEXT NOT NULL,
    "documenti" TEXT[],
    "allegati" TEXT[],
    "amministratoreId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Anagrafica_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Fornitore" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "emailPec" TEXT NOT NULL,
    "tipologia" "TipologiaAnagrafica" NOT NULL,
    "nome" TEXT NOT NULL,
    "cognome" TEXT NOT NULL,
    "ragioneSociale" TEXT,
    "responsabile" TEXT,
    "codiceFiscale" TEXT NOT NULL,
    "partitaIva" TEXT NOT NULL,
    "nazioneResidenza" TEXT NOT NULL,
    "comuneResidenza" TEXT NOT NULL,
    "indirizzoResidenza" TEXT NOT NULL,
    "capResidenza" TEXT NOT NULL,
    "nazioneDomicilio" TEXT,
    "comuneDomicilio" TEXT,
    "indirizzoDomicilio" TEXT,
    "capDomicilio" TEXT,
    "nazioneSedeLegale" TEXT NOT NULL,
    "comuneSedeLegale" TEXT NOT NULL,
    "indirizzoSedeLegale" TEXT NOT NULL,
    "capSedeLegale" TEXT NOT NULL,
    "dataNascita" TIMESTAMP(3) NOT NULL,
    "luogoNascita" TEXT NOT NULL,
    "telefono" TEXT NOT NULL,
    "cellulare" TEXT NOT NULL,
    "note" TEXT NOT NULL,
    "nomeBanca" TEXT NOT NULL,
    "iban" TEXT NOT NULL,
    "cassaPrevidenza" "TipologiaCassa" NOT NULL,
    "inps" TEXT,
    "iva1" "TipologiaIVA" DEFAULT 'ZERO',
    "iva2" "TipologiaIVA",
    "iva3" "TipologiaIVA",
    "tipoRitenuta" "TipologiaRitenuta" NOT NULL,
    "causaliSommeErogate" "CausaliSomme" NOT NULL,
    "cciaa" TEXT,
    "inail" TEXT,
    "albo" TEXT,
    "documenti" TEXT[],
    "allegati" TEXT[],
    "amministratoreId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Fornitore_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Dipendente" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "emailPec" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "cognome" TEXT NOT NULL,
    "codiceFiscale" TEXT NOT NULL,
    "nazioneResidenza" TEXT NOT NULL,
    "comuneResidenza" TEXT NOT NULL,
    "indirizzoResidenza" TEXT NOT NULL,
    "capResidenza" TEXT NOT NULL,
    "nazioneDomicilio" TEXT,
    "comuneDomicilio" TEXT,
    "indirizzoDomicilio" TEXT,
    "capDomicilio" TEXT,
    "dataNascita" TIMESTAMP(3) NOT NULL,
    "luogoNascita" TEXT NOT NULL,
    "telefono" TEXT NOT NULL,
    "cellulare" TEXT NOT NULL,
    "note" TEXT NOT NULL,
    "nomeBanca" TEXT NOT NULL,
    "iban" TEXT NOT NULL,
    "causaliSommeErogate" "CausaliSomme" NOT NULL,
    "documenti" TEXT[],
    "allegati" TEXT[],
    "amministratoreId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Dipendente_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Condominio" (
    "id" SERIAL NOT NULL,
    "codice" TEXT,
    "tipologia" "TipologiaCondominio" NOT NULL,
    "denominazione" TEXT NOT NULL,
    "codiceFiscale" TEXT NOT NULL,
    "comune" TEXT NOT NULL,
    "indirizzo" TEXT NOT NULL,
    "cap" TEXT NOT NULL,
    "sezioneUrbana" TEXT NOT NULL,
    "foglio" INTEGER NOT NULL,
    "particella" INTEGER NOT NULL,
    "totalSuperficie" DOUBLE PRECISION NOT NULL,
    "totaleUnita" INTEGER NOT NULL,
    "totaleVani" DOUBLE PRECISION NOT NULL,
    "posizioneINPS" TEXT NOT NULL,
    "posizioneINAIL" TEXT NOT NULL,
    "luogoAssemblea1" TEXT NOT NULL,
    "luogoAssemblea2" TEXT NOT NULL,
    "decimaliMillesimi" INTEGER NOT NULL,
    "descrizione" TEXT,
    "note" TEXT,
    "allegati" TEXT[],
    "dataPresaInCarico" TIMESTAMP(3) NOT NULL,
    "dataFineInCarico" TIMESTAMP(3),
    "amministratoreId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Condominio_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UnitaImmobiliare" (
    "id" SERIAL NOT NULL,
    "tipologia" "TipologiaImmobile" NOT NULL,
    "subalterno" TEXT NOT NULL,
    "superficie" DOUBLE PRECISION NOT NULL,
    "vani" INTEGER NOT NULL,
    "scala" TEXT NOT NULL,
    "piano" TEXT NOT NULL,
    "interno" TEXT NOT NULL,
    "descrizione" TEXT,
    "note" TEXT,
    "nudaProprietaAttiva" TEXT[],
    "usufruttoAttivo" TEXT[],
    "proprietarioAttivo" TEXT[],
    "nudaProprietaPrecedente" TEXT[],
    "usufruttoPrecendente" TEXT[],
    "proprietarioPrecedente" TEXT[],
    "conduttorePrecedente" TEXT[],
    "dataDiAttivazione" TIMESTAMP(3) NOT NULL,
    "dataDiDisattivazione" TIMESTAMP(3),
    "condominioId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UnitaImmobiliare_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tabella" (
    "id" SERIAL NOT NULL,
    "denominazione" TEXT NOT NULL,
    "totaleMillesimi" INTEGER NOT NULL,
    "ripartizioneMillesimi" TEXT[],
    "percentualeNudaProprieta" TEXT[],
    "percentualeUsufrutto" TEXT[],
    "percentualeProprieta" TEXT[],
    "percentualeConduttore" TEXT[],
    "dataArchiviazione" TIMESTAMP(3),
    "descrizione" TEXT,
    "note" TEXT,
    "condominioId" INTEGER NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Tabella_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ContoMastro" (
    "id" SERIAL NOT NULL,
    "denominazione" TEXT NOT NULL,
    "descrizione" TEXT,
    "note" TEXT,
    "tabellaId" INTEGER NOT NULL,
    "conti" TEXT[],
    "dataArchiviazione" TIMESTAMP(3),
    "condominioId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ContoMastro_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Risorsa" (
    "id" SERIAL NOT NULL,
    "saldo" DOUBLE PRECISION NOT NULL,
    "denominazione" TEXT NOT NULL,
    "descrizione" TEXT,
    "istitutoCredito" TEXT NOT NULL,
    "agenzia" TEXT,
    "iban" TEXT,
    "codiceBIC" TEXT,
    "note" TEXT,
    "dataArchiviazione" TIMESTAMP(3),
    "condominioId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Risorsa_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Fondo" (
    "id" SERIAL NOT NULL,
    "saldo" DOUBLE PRECISION NOT NULL,
    "tipologia" "TipologiaFondo" NOT NULL,
    "denominazione" TEXT NOT NULL,
    "descrizione" TEXT,
    "note" TEXT,
    "dataArchiviazione" TIMESTAMP(3),
    "condominioId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Fondo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EstrattoConto" (
    "id" SERIAL NOT NULL,
    "saldo" DOUBLE PRECISION NOT NULL,
    "denominazione" TEXT NOT NULL,
    "descrizione" TEXT,
    "note" TEXT,
    "transazioni" TEXT[],
    "risorsaId" INTEGER,
    "fondoId" INTEGER,
    "gestioneId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "EstrattoConto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Transazione" (
    "id" SERIAL NOT NULL,
    "data" TIMESTAMP(3) NOT NULL,
    "importo" DOUBLE PRECISION NOT NULL,
    "descrizione" TEXT,
    "note" TEXT,
    "riferimento" TEXT,
    "provenienzaFornitore" TEXT,
    "provenienzaAnagrafica" TEXT,
    "destinazioneFornitore" TEXT,
    "destinazioneAnagrafica" TEXT,
    "gestioneId" INTEGER,
    "condominioId" INTEGER NOT NULL,
    "unitaImmobiliareId" INTEGER,
    "risorsaId" INTEGER NOT NULL,
    "fondoId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Transazione_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Movimento" (
    "id" SERIAL NOT NULL,
    "tipologia" "TipologiaMovimento" NOT NULL,
    "dataScadenza" TIMESTAMP(3) NOT NULL,
    "dataEmissione" TIMESTAMP(3) NOT NULL,
    "dataPagamento" TIMESTAMP(3),
    "ritenuta" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "importo" DOUBLE PRECISION NOT NULL,
    "descrizione" TEXT,
    "note" TEXT,
    "risorsaId" INTEGER,
    "unitaImmobiliareId" INTEGER,
    "fornitoreId" INTEGER,
    "dipendenteId" INTEGER,
    "transazioneId" INTEGER,
    "condominioId" INTEGER NOT NULL,
    "gestioneMovimentoId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Movimento_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Gestione" (
    "id" SERIAL NOT NULL,
    "gestionePrecedenteId" INTEGER,
    "tipologia" "TipologiaGestione" NOT NULL,
    "dataInizioGestione" TIMESTAMP(3) NOT NULL,
    "dataFineGestione" TIMESTAMP(3),
    "denominazione" TEXT NOT NULL,
    "descrizione" TEXT,
    "note" TEXT,
    "condominioId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Gestione_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Preventivo" (
    "id" SERIAL NOT NULL,
    "gestioneId" INTEGER NOT NULL,
    "contoMastroId" INTEGER NOT NULL,
    "importo" DOUBLE PRECISION NOT NULL,
    "numeroRate" INTEGER NOT NULL,
    "descrizione" TEXT,
    "note" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Preventivo_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Condominio_codice_key" ON "Condominio"("codice");

-- AddForeignKey
ALTER TABLE "Anagrafica" ADD CONSTRAINT "Anagrafica_amministratoreId_fkey" FOREIGN KEY ("amministratoreId") REFERENCES "ProfiloAmministratore"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Fornitore" ADD CONSTRAINT "Fornitore_amministratoreId_fkey" FOREIGN KEY ("amministratoreId") REFERENCES "ProfiloAmministratore"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Dipendente" ADD CONSTRAINT "Dipendente_amministratoreId_fkey" FOREIGN KEY ("amministratoreId") REFERENCES "ProfiloAmministratore"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Condominio" ADD CONSTRAINT "Condominio_amministratoreId_fkey" FOREIGN KEY ("amministratoreId") REFERENCES "ProfiloAmministratore"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UnitaImmobiliare" ADD CONSTRAINT "UnitaImmobiliare_condominioId_fkey" FOREIGN KEY ("condominioId") REFERENCES "Condominio"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tabella" ADD CONSTRAINT "Tabella_condominioId_fkey" FOREIGN KEY ("condominioId") REFERENCES "Condominio"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ContoMastro" ADD CONSTRAINT "ContoMastro_tabellaId_fkey" FOREIGN KEY ("tabellaId") REFERENCES "Tabella"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ContoMastro" ADD CONSTRAINT "ContoMastro_condominioId_fkey" FOREIGN KEY ("condominioId") REFERENCES "Condominio"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Risorsa" ADD CONSTRAINT "Risorsa_condominioId_fkey" FOREIGN KEY ("condominioId") REFERENCES "Condominio"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Fondo" ADD CONSTRAINT "Fondo_condominioId_fkey" FOREIGN KEY ("condominioId") REFERENCES "Condominio"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EstrattoConto" ADD CONSTRAINT "EstrattoConto_risorsaId_fkey" FOREIGN KEY ("risorsaId") REFERENCES "Risorsa"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EstrattoConto" ADD CONSTRAINT "EstrattoConto_fondoId_fkey" FOREIGN KEY ("fondoId") REFERENCES "Fondo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EstrattoConto" ADD CONSTRAINT "EstrattoConto_gestioneId_fkey" FOREIGN KEY ("gestioneId") REFERENCES "Gestione"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transazione" ADD CONSTRAINT "Transazione_gestioneId_fkey" FOREIGN KEY ("gestioneId") REFERENCES "Gestione"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transazione" ADD CONSTRAINT "Transazione_condominioId_fkey" FOREIGN KEY ("condominioId") REFERENCES "Condominio"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transazione" ADD CONSTRAINT "Transazione_unitaImmobiliareId_fkey" FOREIGN KEY ("unitaImmobiliareId") REFERENCES "UnitaImmobiliare"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transazione" ADD CONSTRAINT "Transazione_risorsaId_fkey" FOREIGN KEY ("risorsaId") REFERENCES "Risorsa"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transazione" ADD CONSTRAINT "Transazione_fondoId_fkey" FOREIGN KEY ("fondoId") REFERENCES "Fondo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Movimento" ADD CONSTRAINT "Movimento_transazioneId_fkey" FOREIGN KEY ("transazioneId") REFERENCES "Transazione"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Movimento" ADD CONSTRAINT "Movimento_condominioId_fkey" FOREIGN KEY ("condominioId") REFERENCES "Condominio"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Movimento" ADD CONSTRAINT "Movimento_gestioneMovimentoId_fkey" FOREIGN KEY ("gestioneMovimentoId") REFERENCES "Gestione"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Gestione" ADD CONSTRAINT "Gestione_gestionePrecedenteId_fkey" FOREIGN KEY ("gestionePrecedenteId") REFERENCES "Gestione"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Gestione" ADD CONSTRAINT "Gestione_condominioId_fkey" FOREIGN KEY ("condominioId") REFERENCES "Condominio"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Preventivo" ADD CONSTRAINT "Preventivo_gestioneId_fkey" FOREIGN KEY ("gestioneId") REFERENCES "Gestione"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Preventivo" ADD CONSTRAINT "Preventivo_contoMastroId_fkey" FOREIGN KEY ("contoMastroId") REFERENCES "ContoMastro"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
