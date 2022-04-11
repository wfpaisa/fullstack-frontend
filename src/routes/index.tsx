import { RouteObject, Navigate, useLocation } from "react-router-dom"
import DefaultLayout from "@/components/layout/Main"
import AuthLayout from "@/components/layout/Auth"
import About from "@/pages/About"
import Login from "@/pages/Login"
import Home from "@/pages/Home"
import Error404 from "@/pages/Errors/404"
import { useRecoilValue } from "recoil"
import { userState } from "@/stores/user-atoms"

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
  const user = useRecoilValue(userState)
  const location = useLocation()

  if (!user.token) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }

  return children
}

export default routes
