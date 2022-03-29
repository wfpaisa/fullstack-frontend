import * as React from "react"
import Toolbar from "@mui/material/Toolbar"
import Link from "@mui/material/Link"
// import { useNavigate, Link as LinkRouter } from "react-router-dom"

// interface HeaderProps {
//   sections: ReadonlyArray<{
//     title: string
//     url: string
//   }>
//   title: string
// }

export default function Header() {
  // export default function Header(props: HeaderProps) {
  // const { sections, title } = props
  // const navigate = useNavigate()
  const sections = [
    { title: "Home", url: "/" },
    { title: "About", url: "/about" },
  ]

  return (
    <Toolbar
      component="nav"
      variant="dense"
      sx={{
        justifyContent: "start",
        overflowX: "auto",
        borderBottom: 1,
        borderColor: "divider",
      }}
    >
      {sections.map((section) => (
        <Link
          color="inherit"
          noWrap
          key={section.title}
          variant="body2"
          href={section.url}
          sx={{ p: 1, flexShrink: 0 }}
        >
          {section.title}
        </Link>
      ))}
    </Toolbar>
  )
}
