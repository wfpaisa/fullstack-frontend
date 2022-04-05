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

// Create a theme instance.
const theme = (mode: string) => {
  return createTheme({
    palette: {
      mode: mode ? "dark" : "light",
      background: {
        default: mode ? "rgb(17, 25, 54)" : "rgb(255, 255, 255)",
        paper: mode ? "rgb(17, 25, 54)" : "rgb(255, 255, 255)",
      },
      text: {
        primary: mode ? "rgb(255, 255, 255)" : "rgb(17, 25, 54)",
      },
      divider: mode ? "rgb(30, 40, 75)" : "rgb(229, 228, 230)",
      primary: {
        main: "#c701e9",
      },
      secondary: {
        main: "#0184e9",
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

export default theme
