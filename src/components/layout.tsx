import { Link } from 'gatsby';
import * as React from 'react';
import { useSiteMetadata } from '../hooks/use-site-metadata';
import { Button } from 'gatsby-theme-material-ui';
import { DarkModeContext } from '../contexts/dark-mode.context';

type LayoutProps = {
  pageTitle: string;
};

const Layout: React.FC<React.PropsWithChildren<LayoutProps>> = ({
  children,
  pageTitle,
}) => {
  const { toggleDarkMode } = React.useContext(DarkModeContext);
  const data = useSiteMetadata();

  return (
    <div>
      <header>{data?.title}</header>
      <nav className='bg-violet-400 py-3 px-2 border-slate-900/10'>
        <ul className='flex items-center space-x-2 text-violet-50'>
          <li>
            <Link
              className='bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 p-2 rounded-md'
              to={'/'}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className='bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 p-2 rounded-md'
              to={'/about'}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className='bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 p-2 rounded-md'
              to={'/blog'}
            >
              Blog
            </Link>
          </li>
          <li>
            <Button onClick={toggleDarkMode}>Toggle Dark Mode</Button>
          </li>
        </ul>
      </nav>
      <main>
        <h1 className='text-2xl'>{pageTitle}</h1>
        {children}
      </main>
    </div>
  );
};

export default Layout;
