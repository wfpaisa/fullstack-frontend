import ReactDOM from "react-dom"
import { RecoilRoot } from "recoil"
import { BrowserRouter } from "react-router-dom"
import App from "@/App"

// Mui
import { ThemeProvider } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"
import { theme, toastOptions } from "@/styles/Theme"
import { useRecoilState } from "recoil"
import { settingsState } from "@/stores/settings-atoms"
import { Toaster } from "react-hot-toast"

const Mui = () => {
  const [settings] = useRecoilState(settingsState)
  // console.log("Theme", Theme("true"))

  return (
    <ThemeProvider theme={theme(settings.darkMode)}>
      <CssBaseline />
      <BrowserRouter>
        <Toaster
          position="top-right"
          toastOptions={toastOptions(settings.darkMode)}
        />
        <App />
      </BrowserRouter>
    </ThemeProvider>
  )
}

// Store
const Main = (
  <RecoilRoot>
    <Mui />
  </RecoilRoot>
)

const rootElement = document.getElementById("root")

if (rootElement?.hasChildNodes()) {
  ReactDOM.hydrate(Main, rootElement)
} else {
  ReactDOM.render(Main, rootElement)
}
