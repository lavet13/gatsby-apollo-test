import * as React from 'react';
import { ApolloProvider } from '@apollo/client';
import client from './client';
import { DarkModeProvider } from '../contexts/dark-mode.context';

type WrapRootElementProps = {
  children: React.ReactNode;
};

export const ApolloClient: React.FC<WrapRootElementProps> = ({ children }) => {
  return (
    <ApolloProvider client={client}>
      <DarkModeProvider>{children}</DarkModeProvider>
    </ApolloProvider>
  );
};
