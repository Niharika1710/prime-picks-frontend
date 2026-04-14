import { createBrowserRouter } from 'react-router';
import { RootLayout } from './RootLayout';
import { HomePage } from './pages/HomePage';
import { CollectionsPage } from './pages/CollectionsPage';
import { BrandsPage } from './pages/BrandsPage';
import { AboutPage } from './pages/AboutPage';
import { NotFoundPage } from './pages/NotFoundPage';

export const createRouter = () => {
  return createBrowserRouter([
    {
      path: '/',
      Component: RootLayout,
      children: [
        {
          index: true,
          Component: HomePage
        },
        {
          path: 'collections',
          Component: CollectionsPage
        },
        {
          path: 'brands',
          Component: BrandsPage
        },
        {
          path: 'about',
          Component: AboutPage
        },
        {
          path: '*',
          Component: NotFoundPage
        }
      ]
    }
  ]);
};
