import { Link, Outlet } from "react-router-dom"
import ErrorBoundary from "@/pages/errors/ErrorBoundary"

const About = () => {
  return (
    <>
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>
      </header>
      <ErrorBoundary>
        <Outlet />
      </ErrorBoundary>
    </>
  )
}

export default About
