import { RouteObject, Navigate, useLocation } from "react-router-dom"
import DefaultLayout from "@/components/layout/Main"
import AuthLayout from "@/components/layout/Auth"
import Home from "@/pages/Home"
import Login from "@/pages/Login"
import About from "@/pages/About"
import Blog from "@/pages/Blog"
import Error404 from "@/pages/Errors/404"
// import { useRecoilValue } from "recoil"
import { userStore } from "@/stores/user"

const routes: RouteObject[] = [
  {
    path: "/",
    element: (
      <RequireAuth>
        <DefaultLayout />
      </RequireAuth>
    ),

    children: [
      {
        index: true,
        element: <Home />,
      },
      { path: "about", element: <About /> },
      { path: "blog", element: <Blog /> },
    ],
  },

  {
    path: "/login",
    element: <AuthLayout />,
    children: [{ path: "", element: <Login /> }],
  },

  // If no match is found, redirect to 404 page
  { path: "*", element: <Error404 /> },
]

/**
 * Check if user is logged in
 */
function RequireAuth({ children }: { children: JSX.Element }) {
  const user = userStore((state) => state)
  const location = useLocation()

  if (!user.token) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }

  return children
}

export default routes
