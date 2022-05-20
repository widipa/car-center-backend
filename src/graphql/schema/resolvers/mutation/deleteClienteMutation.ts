import { Cliente } from "@prisma/client";
import { deleteCliente } from "@src/data/ClienteService";
import { IApolloServerContext } from "@src/interfaces/IApolloServerContext";
import { GraphQLNonNull } from "graphql";
import DeleteClienteInput from "@src/graphql/schema/typedefs/DeleteClienteInput";
import GqlCliente from '@src/graphql/schema/typedefs/GqlCliente';

const deleteClienteMutation = {
    type: GqlCliente,
    args: {
      input: {
        type: new GraphQLNonNull(DeleteClienteInput),
        description: 'Cliente ingresado para ser eliminado.',
      },
    },
    resolve: async (
      _source: unknown,
      {
        input: {
          id
        },
      }: any,
      _context: IApolloServerContext
    ): Promise<Cliente> => {
      return deleteCliente(
        id
      );
    },
  };
  
  export default deleteClienteMutation;
  