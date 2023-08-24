import * as React from 'react';
import { type HeadFC, type PageProps } from 'gatsby';
import Layout from '../components/layout';

import { StaticImage } from 'gatsby-plugin-image';
import Seo from '../components/seo';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout pageTitle='Home Page'>
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        src={'../images/123.jpg'}
        width={600}
        alt={'Handsome friend'}
      />
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <Seo title='Home Page' />;
