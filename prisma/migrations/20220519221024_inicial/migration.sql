-- CreateTable
CREATE TABLE "Cliente" (
    "id" SERIAL NOT NULL,
    "primer_nombre" TEXT NOT NULL,
    "segundo_nombre" TEXT NOT NULL,
    "primer_apellido" TEXT NOT NULL,
    "segundo_apellido" TEXT NOT NULL,
    "tipo_documento" TEXT NOT NULL,
    "documento" TEXT NOT NULL,
    "celular" TEXT NOT NULL,
    "direccion" TEXT NOT NULL,
    "correo_electronico" TEXT NOT NULL,

    CONSTRAINT "Cliente_pkey" PRIMARY KEY ("id")
);
