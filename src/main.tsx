import ReactDOM from "react-dom"
import { RecoilRoot } from "recoil"
import { BrowserRouter } from "react-router-dom"
import App from "@/App"

// Mui
import { ThemeProvider } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"
import Theme from "@/styles/Theme"
import { useRecoilState } from "recoil"
import { darkModeState } from "@/stores/settings-atoms"

const Mui = () => {
  const [darkMode] = useRecoilState(darkModeState)
  // console.log("Theme", Theme("true"))

  return (
    <ThemeProvider theme={Theme(darkMode)}>
      <CssBaseline />
      <BrowserRouter>
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
