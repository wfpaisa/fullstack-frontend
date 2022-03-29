import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"
import App from "@/App"
import { RecoilRoot } from "recoil"
import CssBaseline from "@mui/material/CssBaseline"
import { ThemeProvider } from "@mui/material/styles"
import Theme from "@/styles/Theme"

const rootElement = document.getElementById("root")

const app = (
  <RecoilRoot>
    <ThemeProvider theme={Theme}>
      <CssBaseline />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </RecoilRoot>
)

if (rootElement?.hasChildNodes()) {
  ReactDOM.hydrate(app, rootElement)
} else {
  ReactDOM.render(app, rootElement)
}
