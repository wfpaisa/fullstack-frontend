import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"
import App from "@/App"
import "@/styles/main.css"
import { RecoilRoot } from "recoil"

const rootElement = document.getElementById("root")

const app = (
  <RecoilRoot>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </RecoilRoot>
)

if (rootElement?.hasChildNodes()) {
  ReactDOM.hydrate(app, rootElement)
} else {
  ReactDOM.render(app, rootElement)
}
