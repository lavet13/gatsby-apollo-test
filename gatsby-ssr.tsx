import * as React from 'react';
import { ApolloClientProvider } from './src/gatsby-plugin-apollo/wrap-root-element';
import { TopLayout } from './src/gatsby-theme-material-ui-top-layout/mui-root-wrapper';
import { DarkModeProvider } from './src/contexts/dark-mode.context';

export const wrapRootElement: React.FC<{ element: React.ReactNode }> = ({
  element,
}) => (
  <ApolloClientProvider>
    <DarkModeProvider>
      <TopLayout>{element}</TopLayout>
    </DarkModeProvider>
  </ApolloClientProvider>
);
