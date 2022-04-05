import { Outlet } from "react-router-dom"
import ErrorBoundary from "@/pages/Errors/ErrorBoundary"
import "./styles.scss"
import Box from "@mui/material/Box"
import Header from "../Header"
import Drawer from "../Drawer"
import Toolbar from "@mui/material/Toolbar"
import Container from "@mui/material/Container"

const About = () => {
  const drawerWidth = 240

  return (
    <Box sx={{ display: "flex" }}>
      <Header />
      <Drawer drawerwidth={drawerWidth} />

      <Box
        component="main"
        className="anima"
        sx={{
          flexGrow: 1,
          p: 3,
          width: "100%",
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
