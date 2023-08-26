import type { GatsbyConfig } from 'gatsby';
import { plugin as reactApollo } from '@graphql-codegen/typescript-react-apollo';

const config: GatsbyConfig = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  plugins: [
    'gatsby-plugin-image',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-sharp',
      options: {
        defaults: {
          placeholder: 'blurred',
        },
      },
    },
    {
      resolve: 'gatsby-plugin-graphql-codegen',
      options: {
        fileName: './__generated/gatsby-graphql.ts',
        documentPaths: [`./src/**/*.{ts,tsx}`],
        // additionalSchemas: [
        //   {
        //     key: 'apollo-books-authors',
        //     fileName: './__generated/graphql-books-authors.ts',
        //     documentPaths: [`./src/**/*.{ts,tsx}`],
        //     codegenPlugins: [reactApollo],
        //     schema: 'http://localhost:4000/graphql',
        //     pluckConfig: {
        //       globalGqlIdentifierName: 'gql',
        //       modules: [
        //         {
        //           name: 'graphql-tag',
        //           identifier: 'gql',
        //         },
        //       ],
        //     },
        //   },
        // ],
      },
    },
    {
      resolve: 'gatsby-theme-material-ui',
      options: {
        webFontsConfig: {
          fonts: {
            google: [
              {
                family: `Montserrat`,
                variants: ['300', '400', '500'],
              },
            ],
          },
        },
      },
    },
  ],
};

export default config;
