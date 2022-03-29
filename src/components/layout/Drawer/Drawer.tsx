import * as React from "react"
import Toolbar from "@mui/material/Toolbar"
import { styled, Theme } from "@mui/material/styles"
import IconButton from "@mui/material/IconButton"
import MuiDrawer, { DrawerProps as MuiDrawerProps } from "@mui/material/Drawer"
import Divider from "@mui/material/Divider"
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft"
import List from "@mui/material/List"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import DashboardIcon from "@mui/icons-material/Dashboard"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import { useNavigate } from "react-router-dom"
import { useRecoilState } from "recoil"
import { drawerState } from "@/components/layout/Main/store/main-atoms"

interface DrawerProps extends MuiDrawerProps {
  drawerwidth?: number | string
  theme?: Theme
}

const myStyles = ({ theme, open, drawerwidth }: DrawerProps) => {
  if (!theme) return {}

  console.log("theme", theme.spacing(7))
  const defaultStyle = {
    "& .MuiDrawer-paper": {
      position: "relative",
      whiteSpace: "nowrap",
      width: drawerwidth,
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: "border-box",
    },
  }

  if (!open) {
    return {
      ...defaultStyle,
      "& .MuiDrawer-paper": {
        overflowX: "hidden",
        transition: theme.transitions.create("width", {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up("sm")]: {
          width: theme.spacing(9),
        },
      },
    }
  }

  return defaultStyle
}
const Drawer = styled(MuiDrawer)<DrawerProps>((props) => myStyles(props))

interface HeaderProps {
  drawerwidth: number
}

export default function Header({ drawerwidth }: HeaderProps) {
  const navigate = useNavigate()
  const [drawer, setDrawer] = useRecoilState(drawerState)
  const toggleDrawer = () => setDrawer(!drawer)

  const handleNavigate = (to: string) => {
    navigate(to, { replace: true })
  }

  return (
    <Drawer variant="permanent" open={drawer} drawerwidth={drawerwidth}>
      <Toolbar
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          px: [1],
        }}
      >
        <IconButton onClick={toggleDrawer}>
          <ChevronLeftIcon />
        </IconButton>
      </Toolbar>
      <Divider />
      <List component="nav">
        <ListItemButton onClick={() => handleNavigate("/")}>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItemButton>

        <ListItemButton onClick={() => handleNavigate("/about")}>
          <ListItemIcon>
            <ShoppingCartIcon />
          </ListItemIcon>
          <ListItemText primary="About" />
        </ListItemButton>
      </List>
    </Drawer>
  )
}
