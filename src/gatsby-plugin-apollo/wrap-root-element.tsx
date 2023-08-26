import * as React from 'react';
import { ApolloProvider } from '@apollo/client';
import client from './client';

type WrapRootElementProps = {
  children: React.ReactNode;
};

export const ApolloClientProvider: React.FC<WrapRootElementProps> = ({
  children,
}) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
