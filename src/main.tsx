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

// React 18
// import { BrowserRouter } from "react-router-dom"
// import App from "@/App"
// import { createRoot } from "react-dom/client"
// import { StrictMode } from "react"

// const rootElement = document.getElementById("root")
// const root = createRoot(rootElement as Element)

// root.render(
//   <StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </StrictMode>
// )
