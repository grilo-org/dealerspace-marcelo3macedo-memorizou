-- CreateTable
CREATE TABLE "Section" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "notebookId" TEXT NOT NULL,

    CONSTRAINT "Section_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Section_notebookId_idx" ON "Section"("notebookId");

-- CreateIndex
CREATE INDEX "Notebook_deletedAt_idx" ON "Notebook"("deletedAt");

-- AddForeignKey
ALTER TABLE "Section" ADD CONSTRAINT "Section_notebookId_fkey" FOREIGN KEY ("notebookId") REFERENCES "Notebook"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
