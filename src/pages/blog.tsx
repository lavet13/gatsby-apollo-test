import * as React from 'react';
import { HeadFC, PageProps, graphql } from 'gatsby';
import { BlogPageQuery } from '../../__generated/gatsby-graphql';
import { GetBooksQuery } from '../../__generated/graphql-books-authors';
import Seo from '../components/seo';
import Layout from '../components/layout';

import { useQuery, gql } from '@apollo/client';

// apollo query
const APOLLO_QUERY = gql`
  query GetBooks {
    books {
      id
      author
      title
    }
  }
`;

const BlogPage: React.FC<PageProps<BlogPageQuery>> = ({ data }) => {
  const {
    loading,
    error,
    data: apolloData,
  } = useQuery<GetBooksQuery>(APOLLO_QUERY);
  console.log(loading);
  console.log(error);
  console.log(apolloData);

  return (
    <Layout pageTitle='Blog Page'>
      {data.allFile.nodes.map(({ name }) => (
        <p key={name}>{name}</p>
      ))}
      <p>My cool books</p>
      {apolloData?.books?.map(book => (
        <p key={book?.id}>{book?.title}</p>
      ))}
    </Layout>
  );
};

// gatsby query
export const query = graphql`
  query BlogPage {
    allFile(filter: { sourceInstanceName: { eq: "blog" } }) {
      nodes {
        name
      }
    }
  }
`;

export const Head: HeadFC = () => <Seo title='Blog Page' />;

export default BlogPage;
