import About from '@/pages/About';
import { RouteObject } from 'react-router-dom';
import Layout from '@/layout/Main';
import Home from '@/pages/Home';
import Error404 from '@/pages/Error404';

export default [
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
    ],
  },
  { path: "*", element: <Error404 /> },
] as RouteObject[];