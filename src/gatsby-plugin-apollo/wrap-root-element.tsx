import * as React from 'react';
import { ApolloProvider } from '@apollo/client';
import client from './client';
import { DarkModeProvider } from '../contexts/dark-mode.context';

type WrapRootElementProps = {
  element: React.ReactNode;
};

export const ApolloClient: React.FC<WrapRootElementProps> = ({ element }) => {
  return (
    <ApolloProvider client={client}>
      <DarkModeProvider>{element}</DarkModeProvider>
    </ApolloProvider>
  );
};
