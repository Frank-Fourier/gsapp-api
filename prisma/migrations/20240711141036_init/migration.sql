-- CreateEnum
CREATE TYPE "TipologiaAnagrafica" AS ENUM ('CONDOMINO', 'GENERICO');

-- CreateEnum
CREATE TYPE "TipologiaRitenuta" AS ENUM ('A', 'B', 'C', 'D');

-- CreateEnum
CREATE TYPE "CausaliSomme" AS ENUM ('A', 'M', 'M1', 'O', 'O1', 'T', 'W');

-- CreateEnum
CREATE TYPE "TipologiaCondominio" AS ENUM ('PREVALENZA_RESIDENZIALE', 'STANDARD', 'RESIDENZIALE', 'COMMERCIALE', 'PREVALENZA_COMMERCIALE', 'SUPER', 'MINIMO', 'MULTIPROPREITA');

-- CreateTable
CREATE TABLE "Anagrafica" (
    "id" SERIAL NOT NULL,
    "tipologia" "TipologiaAnagrafica" NOT NULL,
    "email" TEXT NOT NULL,
    "emailPec" TEXT NOT NULL,
    "denominazione" TEXT NOT NULL,
    "responsabile" TEXT NOT NULL,
    "codiceFiscale" TEXT NOT NULL,
    "partitaIva" TEXT NOT NULL,
    "nazione" TEXT NOT NULL,
    "comune" TEXT NOT NULL,
    "indirizzo" TEXT NOT NULL,
    "telefono" TEXT NOT NULL,
    "cellulare" TEXT NOT NULL,
    "note" TEXT NOT NULL,
    "autorizzazione" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Anagrafica_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Fornitore" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "emailPec" TEXT NOT NULL,
    "denominazione" TEXT NOT NULL,
    "responsabile" TEXT NOT NULL,
    "codiceFiscale" TEXT NOT NULL,
    "partitaIva" TEXT NOT NULL,
    "nazione" TEXT NOT NULL DEFAULT 'Italia',
    "comune" TEXT NOT NULL,
    "indirizzo" TEXT NOT NULL,
    "telefono" TEXT NOT NULL,
    "cellulare" TEXT NOT NULL,
    "note" TEXT NOT NULL,
    "autorizzazione" TEXT NOT NULL,
    "nomeBanca" TEXT NOT NULL,
    "iban" TEXT NOT NULL,
    "tipoRitenuta" "TipologiaRitenuta" NOT NULL,
    "causaliSommeErogate" "CausaliSomme" NOT NULL,
    "cciaa" TEXT NOT NULL,
    "inail" TEXT NOT NULL,
    "inps" TEXT NOT NULL,
    "albo" TEXT NOT NULL,
    "allegati" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Fornitore_pkey" PRIMARY KEY ("id")
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
    "sezioneUrbana" TEXT NOT NULL,
    "foglio" TEXT NOT NULL,
    "particella" TEXT NOT NULL,
    "superficie" DOUBLE PRECISION NOT NULL,
    "posizioneINPS" TEXT NOT NULL,
    "posizioneINAIL" TEXT NOT NULL,
    "luogoAssemblea1" TEXT NOT NULL,
    "luogoAssemblea2" TEXT NOT NULL,
    "cifreDecimali" INTEGER NOT NULL,
    "dataInizio" TIMESTAMP(3) NOT NULL,
    "descrizione" TEXT NOT NULL,
    "allegati" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Condominio_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Condominio_codice_key" ON "Condominio"("codice");
