/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/react-in-jsx-scope */
import { Navigate, useRoutes } from 'react-router-dom';
import { NotFound } from '../view/not-found';
import { notification } from 'antd';
import { Auth } from '../view/auth';
import { useContext, useEffect } from 'react';
import { HandleError } from '../helpers/handleError';
import Cookies from 'js-cookie';
import { AxiosError } from 'axios';
import { DashboardLayout } from '../layouts';
import { MeContext } from '../context/contextMe';
import { HomeView } from '../view/home';
import { GetMeUser } from '../api/users';

const token = Cookies.get('access-token-grama');

const PathSesion = (Componente: any) => {
  return token ? <Componente /> : <Navigate to='/login' />;
};

const NotPathSesion = (Componente: any) => {
  return token ? <Navigate to='/app/home' /> : <Componente />;
};

const routes = [
  {
    path: 'app',
    element: <DashboardLayout />,
    children: [
      { path: 'home', element: PathSesion(HomeView) },
      { path: '*', element: <Navigate to='/404' /> },
    ],
  },
  {
    path: '/',
    // element: <MainLayout />,
    children: [
      { path: '404', element: <NotFound /> },
      { path: '/login', element: NotPathSesion(Auth) },
      { path: '/', element: NotPathSesion(Auth) },
      { path: '*', element: <Navigate to='/404' /> },
    ],
  },
];

const App = () => {
  const routing = useRoutes(routes);
  const { token, setMe } = useContext(MeContext);

  useEffect(() => {
    try {
      const FetchMe = async () => {
        const { me } = await (await GetMeUser({ token })).data;
        setMe(me);
      };

      token && FetchMe();
    } catch (error) {
        notification['error']({
            message: 'Opss !!',
            description: HandleError(error as AxiosError),
          });
    }
  }, [token, setMe]);

  return routing
};

export default App;