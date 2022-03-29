import { Outlet } from "react-router-dom"
import ErrorBoundary from "@/pages/Errors/ErrorBoundary"

import "./styles.scss"
import Container from "@mui/material/Container"
import Header from "../Header"

const About = () => {
  return (
    <Container maxWidth="xl">
      <Header />

      <ErrorBoundary>
        <Outlet />
      </ErrorBoundary>
    </Container>
  )
}

export default About
