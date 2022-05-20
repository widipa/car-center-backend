import { GraphQLID, GraphQLInputObjectType, GraphQLNonNull, GraphQLString } from 'graphql';

const UpdateClienteInput = new GraphQLInputObjectType({
  name: 'UpdateClienteInput',
  description: 'Actualizar un registro de cliente',
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
      description: 'id del cliente',
    },
    primer_nombre: {
      type: GraphQLString,
      description: 'Primer nombre del cliente',
    },
    segundo_nombre: {
      type: GraphQLString,
      description: 'Segundo nombre del cliente',
    },
    primer_apellido: {
      type: GraphQLString,
      description: 'Primer apellido del cliente',
    },
    segundo_apellido: {
      type: GraphQLString,
      description: 'Segundo apellido del cliente',
    },
    tipo_documento: {
      type: GraphQLString,
      description: 'Tipo de documento del cliente',
    },
    documento: {
      type: GraphQLString,
      description: 'Número de identificación del cliente',
    },
    celular: {
      type: GraphQLString,
      description: 'Número de celular del cliente',
    },
    direccion: {
      type: GraphQLString,
      description: 'Dirección de ubicación del cliente',
    },
    correo_electronico: {
      type: GraphQLString,
      description: 'Correo electrónico válido del cliente',
    },
  },
});

export default UpdateClienteInput;
