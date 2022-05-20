import { GraphQLObjectType } from "graphql";
import createClienteMutation from "@src/graphql/schema/resolvers/mutation/createClienteMutation";
import updateClienteMutation from "./updateClienteMutation";
import deleteClienteMutation from "./deleteClienteMutation";

const mutation = new GraphQLObjectType({
    name:'Mutation',
    fields: {
        createCliente: createClienteMutation,
        updateCliente: updateClienteMutation,
        deleteCliente: deleteClienteMutation
    },
});

export default mutation;