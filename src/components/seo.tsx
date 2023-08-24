import * as React from 'react';
import { useSiteMetadata } from '../hooks/use-site-metadata';

type SeoProps = {
  title: string;
};

const Seo: React.FC<SeoProps> = ({ title }) => {
  const data = useSiteMetadata();

  return (
    <title>
      {title} | {data?.title}
    </title>
  );
};

export default Seo;
