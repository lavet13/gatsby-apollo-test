import { HeadFC, Link, PageProps } from 'gatsby';
import * as React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';

const AboutPage: React.FC<PageProps> = () => {
  return (
    <Layout pageTitle='About me'>
      <h1>About me!</h1>
      <p>Hi there!</p>
    </Layout>
  );
};

export const Head: HeadFC = () => <Seo title='About Me' />;

export default AboutPage;
