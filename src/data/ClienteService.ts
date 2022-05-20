import { Cliente } from '@prisma/client';
import prisma from '@src/prisma/client';

export const getAllClientes = async (): Promise<Cliente[]> => {
  return prisma.cliente.findMany();
};

export const createCliente = async (
  primer_nombre: string,
  segundo_nombre: string,
  primer_apellido: string,
  segundo_apellido: string,
  tipo_documento: string,
  documento: string,
  celular: string,
  direccion: string,
  correo_electronico: string
): Promise<Cliente> => {
  return prisma.cliente.create({
    data: {
      primer_nombre,
      segundo_nombre,
      primer_apellido,
      segundo_apellido,
      tipo_documento,
      documento,
      celular,
      direccion,
      correo_electronico,
    },
  });
};

export const updateCliente = async (
  id: number,
  primer_nombre: string,
  segundo_nombre: string,
  primer_apellido: string,
  segundo_apellido: string,
  tipo_documento: string,
  documento: string,
  celular: string,
  direccion: string,
  correo_electronico: string
): Promise<Cliente> => {
  const cliente_id = +id;
  return prisma.cliente.update({
    where: { id: cliente_id },
    data: {
      primer_nombre: primer_nombre || undefined,
      segundo_nombre: segundo_nombre || undefined,
      primer_apellido: primer_apellido || undefined,
      segundo_apellido: segundo_apellido || undefined,
      tipo_documento: tipo_documento || undefined,
      documento: documento || undefined,
      celular: celular || undefined,
      direccion: direccion || undefined,
      correo_electronico: correo_electronico || undefined,
    },
  });
};

export const deleteCliente = async (id: number): Promise<Cliente> => {
  const cliente_id = +id;
  return prisma.cliente.delete({
    where: { id: cliente_id },
  });
};
