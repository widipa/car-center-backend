import { Cliente } from '@prisma/client';
import { createCliente } from '@src/data/ClienteService';
import GqlCliente from '@src/graphql/schema/typedefs/GqlCliente';
import { IApolloServerContext } from '@src/interfaces/IApolloServerContext';
import { GraphQLNonNull } from 'graphql';
import CreateClienteInput from '@src/graphql/schema/typedefs/CreateClienteInput';

const createClienteMutation = {
  type: GqlCliente,
  args: {
    input: {
      type: new GraphQLNonNull(CreateClienteInput),
      description: 'Cliente ingresado para ser creado.',
    },
  },
  resolve: async (
    _source: unknown,
    {
      input: {
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
    }: any,
    _context: IApolloServerContext
  ): Promise<Cliente> => {
    return createCliente(
      primer_nombre,
      segundo_nombre,
      primer_apellido,
      segundo_apellido,
      tipo_documento,
      documento,
      celular,
      direccion,
      correo_electronico
    );
  },
};

export default createClienteMutation;
