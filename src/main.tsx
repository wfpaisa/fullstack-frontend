import ReactDOM from "react-dom"
import { RecoilRoot } from "recoil"
import { BrowserRouter } from "react-router-dom"
import App from "@/App"

const Main = (
  <RecoilRoot>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </RecoilRoot>
)

const rootElement = document.getElementById("root")

if (rootElement?.hasChildNodes()) {
  ReactDOM.hydrate(Main, rootElement)
} else {
  ReactDOM.render(Main, rootElement)
}
