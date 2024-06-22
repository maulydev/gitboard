-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "os" TEXT NOT NULL,
    "browser" TEXT NOT NULL,
    "path" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_browser_key" ON "User"("browser");
