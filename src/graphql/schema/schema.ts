import { GraphQLSchema } from "graphql";
import mutation from "@src/graphql/schema/resolvers/mutation/mutation";
import query from "@src/graphql/schema/resolvers/query/query";

const schema: GraphQLSchema = new GraphQLSchema({
    query,
    mutation
});

export default schema;