import { GraphQLObjectType } from "graphql";
import getAllClienteQuery from "./getAllClienteQuery";

const query = new GraphQLObjectType({
    name: 'Query',
    fields: {
        clientes: getAllClienteQuery,
    },
});

export default query;