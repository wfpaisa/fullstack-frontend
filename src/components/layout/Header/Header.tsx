import Toolbar from "@mui/material/Toolbar"
import AppBar from "@mui/material/AppBar"
import IconButton from "@mui/material/IconButton"
import MenuIcon from "@mui/icons-material/Menu"
import Brightness4Icon from "@mui/icons-material/Brightness4"
import Brightness7Icon from "@mui/icons-material/Brightness7"
import Typography from "@mui/material/Typography"
import UserMenu from "@/components/layout/UserMenu"
import { settingsStore } from "@/stores/settings"

export default function Header() {
  const settings = settingsStore((state) => state)

  return (
    <AppBar
      className="anima"
      position="fixed"
      color="default"
      sx={{
        backgroundColor: "background.default",
        backgroundImage: "none",
        zIndex: { sm: 1201 },
        boxShadow: 0,
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
          onClick={() => settings.toogleDrawer()}
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

        <UserMenu />

        {/* Ico Dark mode */}
        <IconButton onClick={() => settings.toogleDarkMode()}>
          {settings.darkMode ? <Brightness4Icon /> : <Brightness7Icon />}
        </IconButton>

        {/* Ico bell */}
        {/* <IconButton color="inherit">
          <Badge badgeContent={4} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton> */}
      </Toolbar>
    </AppBar>
  )
}
