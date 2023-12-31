import fetch from 'cross-fetch';
import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import { modeVar } from './cache';

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        mode: {
          read() {
            return modeVar();
          },
        },
      },
    },
  },
});

const client = new ApolloClient({
  cache,
  link: new HttpLink({
    uri: 'http://localhost:4000/graphql',
    fetch,
  }),
  defaultOptions: {
    watchQuery: {
      notifyOnNetworkStatusChange: true,
    },
  },
});

export default client;
