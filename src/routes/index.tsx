import { RouteObject } from "react-router-dom"
import DefaultLayout from "@/components/layout/Main"
import About from "@/pages/About"
import Home from "@/pages/Home"
import Error404 from "@/pages/Errors/404"

const routes: RouteObject[] = [
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
    ],
  },
  { path: "*", element: <Error404 /> },
]

export default routes
