import { GraphQLInputObjectType, GraphQLNonNull, GraphQLString } from 'graphql';

const CreateClienteInput = new GraphQLInputObjectType({
  name: 'CreateClienteInput',
  description: 'Crear un registros de cliente',
  fields: {
    primer_nombre: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'Primer nombre del cliente',
    },
    segundo_nombre: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'Segundo nombre del cliente',
    },
    primer_apellido: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'Primer apellido del cliente',
    },
    segundo_apellido: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'Segundo apellido del cliente',
    },
    tipo_documento: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'Tipo de documento del cliente',
    },
    documento: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'Número de identificación del cliente',
    },
    celular: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'Número de celular del cliente',
    },
    direccion: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'Dirección de ubicación del cliente',
    },
    correo_electronico: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'Correo electrónico válido del cliente',
    },
  },
});

export default CreateClienteInput;
