import { createBrowserRouter } from 'react-router';
import { RootLayout } from './RootLayout';
import { HomePage } from './pages/HomePage';
import { CollectionsPage } from './pages/CollectionsPage';
import { BrandsPage } from './pages/BrandsPage';
import { AboutPage } from './pages/AboutPage';
import { AuthPage } from './pages/AuthPage';
import { NotFoundPage } from './pages/NotFoundPage';
import ProtectedRoute from "./components/ProtectedRoute";
import  ProfilePage  from "./pages/ProfilePage";
import CartPage from "./pages/CartPage";

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
      element: (
        <ProtectedRoute>
          <CollectionsPage />
        </ProtectedRoute>
      ),
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
          path: 'auth',
          Component: AuthPage
        },
        {
          path: '*',
          Component: NotFoundPage
        },
        {
          path: "profile",
            element: (
              <ProtectedRoute>
                <ProfilePage />
              </ProtectedRoute>
            )
        },
        {
          path: "cart",
           element: (
            <ProtectedRoute>
              <CartPage />
            </ProtectedRoute>
          )
        }
      ]
    }
  ]);
};
