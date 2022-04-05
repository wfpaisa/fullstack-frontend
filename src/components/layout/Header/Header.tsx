import Toolbar from "@mui/material/Toolbar"
import AppBar from "@mui/material/AppBar"
import IconButton from "@mui/material/IconButton"
import MenuIcon from "@mui/icons-material/Menu"
import Typography from "@mui/material/Typography"
import Badge from "@mui/material/Badge"
import NotificationsIcon from "@mui/icons-material/Notifications"

import { useRecoilState } from "recoil"
import { drawerState } from "@/components/layout/Main/store/main-atoms"

export default function Header() {
  const [drawer, setDrawer] = useRecoilState(drawerState)
  const toggleDrawer = () => setDrawer(!drawer)

  return (
    <AppBar
      className="anima"
      position="fixed"
      sx={{
        zIndex: { sm: 1201 },
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
