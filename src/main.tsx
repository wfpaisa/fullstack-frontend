import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"
import App from "@/App"

const Main = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
)

const rootElement = document.getElementById("root")

if (rootElement?.hasChildNodes()) {
  ReactDOM.hydrate(Main, rootElement)
} else {
  ReactDOM.render(Main, rootElement)
}
