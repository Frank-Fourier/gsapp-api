-- CreateTable
CREATE TABLE "GestioneMovimento" (
    "gestioneId" INTEGER NOT NULL,
    "movimentoId" INTEGER NOT NULL,

    CONSTRAINT "GestioneMovimento_pkey" PRIMARY KEY ("gestioneId","movimentoId")
);

-- AddForeignKey
ALTER TABLE "GestioneMovimento" ADD CONSTRAINT "GestioneMovimento_gestioneId_fkey" FOREIGN KEY ("gestioneId") REFERENCES "Gestione"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GestioneMovimento" ADD CONSTRAINT "GestioneMovimento_movimentoId_fkey" FOREIGN KEY ("movimentoId") REFERENCES "Movimento"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
