import Toolbar from "@mui/material/Toolbar"
import AppBar from "@mui/material/AppBar"
import IconButton from "@mui/material/IconButton"
import MenuIcon from "@mui/icons-material/Menu"
import Typography from "@mui/material/Typography"
import Badge from "@mui/material/Badge"
import NotificationsIcon from "@mui/icons-material/Notifications"

import { useRecoilState } from "recoil"
import { drawerState } from "@/components/layout/Main/store/main-atoms"

interface DrawerProps {
  drawerwidth: number
}

export default function Header({ drawerwidth }: DrawerProps) {
  const [drawer, setDrawer] = useRecoilState(drawerState)
  const toggleDrawer = () => setDrawer(!drawer)

  return (
    <AppBar
      className="anima"
      position="absolute"
      sx={{
        marginLeft: drawer ? drawerwidth : 0,
        width: drawer ? `calc(100% - ${drawerwidth}px)` : "100%",
        zIndex: 1201,
      }}
    >
      <Toolbar
        sx={{
          pr: "24px", // keep right padding when drawer closed
        }}
      >
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={toggleDrawer}
          sx={{
            marginRight: "36px",
            ...(drawer && { display: "none" }),
          }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          component="h1"
          variant="h6"
          color="inherit"
          noWrap
          sx={{ flexGrow: 1 }}
        >
          Dashboard
        </Typography>
        <IconButton color="inherit">
          <Badge badgeContent={4} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}
