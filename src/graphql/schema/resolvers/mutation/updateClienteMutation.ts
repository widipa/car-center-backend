import { GraphQLNonNull } from 'graphql';
import GqlCliente from '@src/graphql/schema/typedefs/GqlCliente';
import UpdateClienteInput from '@src/graphql/schema/typedefs/UpdateClienteInput';
import { IApolloServerContext } from '@src/interfaces/IApolloServerContext';
import { Cliente } from '@prisma/client';
import { updateCliente } from '@src/data/ClienteService';

const updateClienteMutation = {
  type: GqlCliente,
  args: {
    input: {
      type: new GraphQLNonNull(UpdateClienteInput),
      description: 'Cliente ingresado para ser actualizado.',
    },
  },
  resolve: async (
    _source: unknown,
    {
      input: {
        id,
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
    return updateCliente(
      id,
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

export default updateClienteMutation;
