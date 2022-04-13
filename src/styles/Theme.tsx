import { createTheme } from "@mui/material/styles"
import { red } from "@mui/material/colors"
import { forwardRef } from "react"
import { LinkProps } from "@mui/material/Link"
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from "react-router-dom"

// Override Material UI links to use react-router
// Global theme Link: https://mui.com/guides/routing/#ButtonDemo.tsx
const LinkBehavior = forwardRef<
  any,
  Omit<RouterLinkProps, "to"> & { href: RouterLinkProps["to"] }
>((props, ref) => {
  const { href, ...other } = props
  // Map href (MUI) -> to (react-router)
  return <RouterLink data-testid="custom-link" ref={ref} to={href} {...other} />
})

// Colors
const bgColor = "rgb(255, 255, 255)"
const fgColor = "rgb(17, 25, 54)"
const separatorColor = "rgb(229, 228, 230)"
const primaryColor = "#8750DE"
const secondaryColor = "#007EFF"

const bgDarkColor = "rgb(17, 25, 54)"
const fgDarkColor = "rgb(229, 228, 230)"
const separatorDarkColor = "rgb(30, 40, 75)"
const primaryDarkColor = "#8750DE"
const secondaryDarkColor = "#007EFF"

// Create a theme instance.
const theme = (mode: boolean) => {
  return createTheme({
    palette: {
      mode: mode ? "dark" : "light",
      background: {
        default: mode ? bgDarkColor : bgColor,
        paper: mode ? bgDarkColor : bgColor,
      },
      text: {
        primary: mode ? fgDarkColor : fgColor,
      },
      divider: mode ? separatorDarkColor : separatorColor,
      primary: {
        main: "#8750DE",
      },
      secondary: {
        main: "#007EFF",
      },
      error: {
        main: red.A400,
      },
    },

    // React-router en <Links> y <buttons>
    components: {
      MuiLink: {
        defaultProps: {
          component: LinkBehavior,
        } as LinkProps,
      },
      MuiButtonBase: {
        defaultProps: {
          LinkComponent: LinkBehavior,
        },
      },
    },
  })
}

const toastOptions = (modeDark: boolean) => {
  return {
    className: "",
    duration: 5000,
    style: {
      borderRadius: "6px",
      background: modeDark ? bgColor : bgDarkColor,
      color: modeDark ? fgColor : fgDarkColor,
    },
  }
}

export { theme, toastOptions }
export default theme
