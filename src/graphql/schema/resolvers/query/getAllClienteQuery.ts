import { GraphQLList } from 'graphql';

import { Cliente } from '@prisma/client';

import { IApolloServerContext } from '@src/interfaces/IApolloServerContext';
import { getAllClientes } from '@src/data/ClienteService';
import GqlCliente from '@src/graphql/schema/typedefs/GqlCliente';

const getAllClienteQuery = {
  type: new GraphQLList(GqlCliente),
  resolve: async (
    _source: unknown,
    _args: unknown,
    _context: IApolloServerContext,
    _info: unknown
  ): Promise<Cliente[]> => {
    return getAllClientes();
  },
};

export default getAllClienteQuery;
