import { Outlet } from "react-router-dom"
import ErrorBoundary from "@/pages/Errors/ErrorBoundary"
import Container from "@mui/material/Container"
import Box, { BoxProps } from "@mui/material/Box"
import { styled } from "@mui/material/styles"
import Header from "../Header"
import Drawer from "../Drawer"
import "./styles.scss"

const BoxMainStyled = styled(Box)<BoxProps>(({ theme }) => {
  // console.log("thememain", theme)
  return {
    background:
      theme.palette.mode === "dark"
        ? "rgba(255, 255, 255, 0.13)"
        : "rgb(227, 242, 253)",
    borderRadius: "12px",
    minHeight: "calc(100vh - 80px)",
    flexGrow: 1,
    p: 2,
    width: "100%",
    margin: "64px 8px 0 8px",
    [theme.breakpoints.up("md")]: {
      margin: "64px 16px 16px 16px",
    },
  }
})

const Main = () => {
  const drawerWidth = 240

  return (
    <Box sx={{ display: "flex" }}>
      <Header />
      <Drawer drawerwidth={drawerWidth} />

      <BoxMainStyled component="main">
        {/* <Box component="main" className="anima mainc"> */}
        {/* sx={{
          background: "rgb(227, 242, 253)",
          borderRadius: "12px 12px 0px 0px",
          minHeight: "calc(100vh - 64px)",
          flexGrow: 1,
          p: 2,
          width: "100%",
          margin: { xs: "64px 8px 0 8px", xl: "64px 16px 0px 16px" },
        }} */}
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <ErrorBoundary>
            <Outlet />
          </ErrorBoundary>
        </Container>
      </BoxMainStyled>
    </Box>
  )
}

export default Main
