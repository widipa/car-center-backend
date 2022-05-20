import { GraphQLID, GraphQLInputObjectType, GraphQLNonNull } from 'graphql';

const DeleteClienteInput = new GraphQLInputObjectType({
  name: 'DeleteClienteInput',
  description: 'Eliminar un registro de cliente',
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
      description: 'id del cliente',
    },
  },
});

export default DeleteClienteInput;
