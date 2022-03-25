import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"
import App from "@/App"
import "@/styles/main.css"

const rootElement = document.getElementById("root")

const app = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
)

if (rootElement?.hasChildNodes()) {
  ReactDOM.hydrate(app, rootElement)
} else {
  ReactDOM.render(app, rootElement)
}
