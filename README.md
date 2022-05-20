# node-okta-auth-tutorial
Okta Authentication Tutorial with Node.js

# Comandos para crear la estructura de carpetas de GraphQL
cd src && mkdir graphql && cd graphql && mkdir generated && mkdir schema && cd schema && mkdir resolvers && mkdir typedefs && cd resolvers && mkdir query && mkdir mutation && cd ../../../..

#
cd src && mkdir data && cd data && mkdir types && cd ../..

# Creando los objetos
touch src/graphql/schema/typedefs/GplCliente.ts
touch src/data/types/Cliente.ts
touch src/graphql/schema/resolvers/query/getAllClienteQuery.ts
touch src/graphql/schema/resolvers/query/query.ts
touch src/graphql/schema/schema.ts

# Creando archivos para prisma
cd src && mkdir prisma && cd .. && touch src/prisma/client.ts
touch src/prisma/IPrismaContext.ts
cd src && mkdir interfaces && cd .. && touch src/interfaces/IApolloServerContext.ts
touch src/data/ClienteService.ts

# Creando Mutaciones
touch src/graphql/schema/typedefs/CreateClienteInput.ts  
touch src/graphql/schema/resolvers/mutation/createClienteMutation.ts
touch src/graphql/schema/resolvers/mutation/mutation.ts  