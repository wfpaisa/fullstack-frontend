import { Outlet } from "react-router-dom"
import ErrorBoundary from "@/pages/Errors/ErrorBoundary"

import "./styles.scss"
// import Container from "@mui/material/Container"
import Box from "@mui/material/Box"
import Header from "../Header"
import Drawer from "../Drawer"
import Toolbar from "@mui/material/Toolbar"
import Container from "@mui/material/Container"

const About = () => {
  const drawerWidth = 240

  return (
    <Box sx={{ display: "flex" }}>
      <Header drawerwidth={drawerWidth} />
      <Drawer drawerwidth={drawerWidth} />

      <Box
        component="main"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          flexGrow: 1,
          height: "100vh",
          overflow: "auto",
        }}
      >
        <Toolbar />
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <ErrorBoundary>
            <Outlet />
          </ErrorBoundary>
        </Container>
      </Box>
    </Box>
  )
}

export default About
