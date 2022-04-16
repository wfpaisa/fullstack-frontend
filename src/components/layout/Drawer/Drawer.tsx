import Toolbar from "@mui/material/Toolbar"
import Drawer from "@mui/material/Drawer"
import List from "@mui/material/List"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import DashboardIcon from "@mui/icons-material/Dashboard"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import { useNavigate } from "react-router-dom"
import { settingsStore } from "@/stores/settings"
import BookIcon from "@mui/icons-material/Book"
import Box from "@mui/material/Box"

interface HeaderProps {
  drawerwidth: number
}

export default function Header({ drawerwidth }: HeaderProps) {
  const navigate = useNavigate()
  const settings = settingsStore((state) => state)
  // const toggleDrawer = () => setDrawer(!drawer)

  const container =
    window !== undefined ? () => window.document.body : undefined

  const handleNavigate = (to: string) => {
    navigate(to, { replace: true })
  }

  // Avoid hide scrollbar when drawer is open in desktop
  const ShowMobileDrawer = () => {
    if (window.innerWidth < 600) {
      return (
        <Drawer
          container={container}
          variant="temporary"
          open={settings.drawer}
          onClose={() => settings.toogleDrawer()}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerwidth,
            },
          }}
        >
          {menuList}
        </Drawer>
      )
    }
    return null
  }

  const menuList = (
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

      {/* <ListItemButton onClick={() => handleNavigate("/blog")}>
        <ListItemIcon>
          <BookIcon />
        </ListItemIcon>
        <ListItemText primary="Blog" />
      </ListItemButton> */}
    </List>
  )

  return (
    <Box
      component="nav"
      className="anima"
      sx={{
        width: { sm: settings.drawer ? drawerwidth : 0 },
        flexShrink: { sm: settings.drawer ? 0 : null },
      }}
    >
      {/* Movil */}
      <ShowMobileDrawer />

      {/* Desktop */}
      <Drawer
        variant="persistent"
        anchor="left"
        open={settings.drawer}
        onClose={() => settings.toogleDrawer()}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerwidth,
            borderRight: "0px",
          },
        }}
      >
        <Toolbar />
        {menuList}
      </Drawer>
    </Box>
  )
}
