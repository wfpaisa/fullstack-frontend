import { Outlet } from "react-router-dom"
import ErrorBoundary from "@/pages/Errors/ErrorBoundary"
import Grid from "@mui/material/Grid"
import "./styles.scss"

const Auth = () => {
  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <ErrorBoundary>
        <Outlet />
      </ErrorBoundary>
    </Grid>
  )
}

export default Auth
