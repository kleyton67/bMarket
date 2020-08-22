import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider
} from '@apollo/client';
import { Link } from 'react-router-dom';

const client = new ApolloClient({
  uri: 'graphql',
  cache: new InMemoryCache()
  /* Uncomment this for accounts use
  request: operation =>
    operation.setContext(() => ({
      headers: {
        authorization: Accounts._storedLoginToken()
      }
    }))
   */
});

export const App = () => (
  <ApolloProvider client={client}>
    <div>
      <h1>Welcome to BMarket! ☄</h1>
      <Link to="/WhoIAm">Iniciar Sessão!!!</Link>
    </div>
  </ApolloProvider>
);
