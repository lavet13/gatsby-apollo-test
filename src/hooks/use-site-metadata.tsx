import { graphql, useStaticQuery } from 'gatsby';
import { LayoutQuery } from '../../__generated/gatsby-graphql';

const query = graphql`
  query Layout {
    site {
      siteMetadata {
        title
        description
        siteUrl
      }
    }
  }
`;

export const useSiteMetadata = () => {
  const data = useStaticQuery<LayoutQuery>(query);

  return data.site?.siteMetadata;
};
