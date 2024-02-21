import React, { useEffect } from 'react';
import * as ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  useLocation,
} from 'react-router-dom';
import { Provider } from 'react-redux';

import Root from './Root';
import Error from './pages/Error';
import Home from './pages/Home';
import ProtectedRoutes from './utils/ProtectedRoute';
import store from './store/store';

import Authentication from './components/Authentication/Authentication';
import ForgetPassword from './components/Authentication/ForgetPassword';
import Pricing from './components/Others/Pricing/Pricing';
import Privacy from './components/Others/Privacy/Privacy';
import Works from './components/Others/Works/Works';
import Vault from './pages/Vault';
import PersonalPage from './pages/PersonalPage';
import SubscribeToUpdate from './components/Others/Subscribe/SubscribeToUpdate';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <Error />,
    element: (
      <>
        <ScrollToTop />
        <Root />
      </>
    ),
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'auth',
        children: [
          { path: 'login', element: <Authentication mode={'login'} /> },
          { path: 'sign-up', element: <Authentication mode={'sign-up'} /> },
        ],
      },
      // {
      //   path: 'personal',
      //   element: <PersonalPage />,
      // },
      {
        path: 'forget-password',
        element: <ForgetPassword />,
      },
      // {
      //   path: 'pricing',
      //   element: <Pricing />,
      // },
      {
        path: 'privacy',
        element: <Privacy />,
      },
      // {
      //   path: 'works',
      //   element: <Works />,
      // },
      {
        path: 'vault',
        element: <ProtectedRoutes />,
        children: [
          {
            path: '',
            element: <Vault />,
          },
        ],
      },
      // {
      //   path: 'subscribe',
      //   element: <SubscribeToUpdate />,
      // },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
  // </React.StrictMode>
);
