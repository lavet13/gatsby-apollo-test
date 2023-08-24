import * as React from 'react';
import { ApolloClient } from './src/gatsby-plugin-apollo/wrap-root-element';
import { TopLayout } from './src/gatsby-theme-material-ui-top-layout/mui-root-wrapper';

export const wrapRootElement = props => (
  <ApolloClient {...props}>
    <TopLayout />
  </ApolloClient>
);
