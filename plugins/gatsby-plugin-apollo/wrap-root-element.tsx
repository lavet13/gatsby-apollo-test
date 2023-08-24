import * as React from 'react';
import { ApolloProvider } from '@apollo/client';
import client from './client';

type WrapRootElementProps = {
  element: React.ReactNode;
};

export const wrapRootElement: React.FC<WrapRootElementProps> = ({
  element,
}) => <ApolloProvider client={client}>{element}</ApolloProvider>;
