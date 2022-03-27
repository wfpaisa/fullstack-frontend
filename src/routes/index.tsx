import { RouteObject } from "react-router-dom"
import MainLayout from "@/layout/MainLayout"
import About from "@/pages/about"
import Home from "@/pages/home"
import Error404 from "@/pages/errors/404"

const routes: RouteObject[] = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
    ],
  },
  { path: "*", element: <Error404 /> },
]

export default routes
