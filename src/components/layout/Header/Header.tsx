import Toolbar from "@mui/material/Toolbar"
import AppBar from "@mui/material/AppBar"
import IconButton from "@mui/material/IconButton"
import MenuIcon from "@mui/icons-material/Menu"
import Brightness4Icon from "@mui/icons-material/Brightness4"
import Brightness7Icon from "@mui/icons-material/Brightness7"
import Typography from "@mui/material/Typography"
import { useRecoilState } from "recoil"
import { drawerState } from "@/components/layout/Main/store/main-atoms"
import { settingsState, ISettingsStatePartial } from "@/stores/settings-atoms"

export default function Header() {
  const [drawer, setDrawer] = useRecoilState(drawerState)
  const [settings, setSettings] = useRecoilState(settingsState)

  const toggleDrawer = () => setDrawer(!drawer)

  const toggleSettings = () => {
    const data = { darkMode: !settings.darkMode } as ISettingsStatePartial
    setSettings({ ...settings, ...data })
  }

  return (
    <AppBar
      className="anima"
      position="absolute"
      color="default"
      sx={{
        background: "none",
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

        {/* Ico Dark mode */}
        <IconButton onClick={() => toggleSettings()}>
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
