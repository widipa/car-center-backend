import { ApolloServer } from 'apollo-server';
import dotenv from 'dotenv-safe';

import { performAstCodegen } from '@src/codegen';
import { IApolloServerContext } from '@src/interfaces/IApolloServerContext';
import schema from '@src/graphql/schema/schema';
import prisma from '@src/prisma/client';
//import apolloServerConfig from '@src/lib/config/apolloServerConfig';

dotenv.config();

const startServer = () => {
  performAstCodegen();

  const context: IApolloServerContext = {
    prisma,
  };

  const server = new ApolloServer({ 
    schema, 
    //playground: process.env.MODE_ENV !== 'production',
    context,
  });

  server
    .listen()
    .then(({ url }) => {
      console.log(`🚀  Server ready at ${url}graphql`);
    })
    .catch(err => console.log('Error launching server', err));
  
};

startServer();
