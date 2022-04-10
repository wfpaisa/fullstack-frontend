import { RouteObject } from "react-router-dom"
import DefaultLayout from "@/components/layout/Main"
import AuthLayout from "@/components/layout/Auth"
import About from "@/pages/About"
import Login from "@/pages/Login"
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
  {
    path: "/login",
    element: <AuthLayout />,
    children: [{ path: "", element: <Login /> }],
  },
  { path: "*", element: <Error404 /> },
]

export default routes
