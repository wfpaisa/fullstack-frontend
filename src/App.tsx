import { ThemeProvider } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"
import { theme, toastOptions } from "@/styles/Theme"
import routes from "@/routes/index"
import { useRoutes } from "react-router-dom"
import { Toaster } from "react-hot-toast"
import { useRecoilState } from "recoil"
import { settingsState } from "@/stores/settings-atoms"
import {
  ApolloProvider,
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client"

const App = () => {
  const Routes = useRoutes(routes)

  const [settings] = useRecoilState(settingsState)
  // console.log("Theme", Theme("true"))

  // GraphQL client
  const httpLink = createHttpLink({ uri: "//localhost:1337/graphql" })
  const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
  })

  return (
    <ThemeProvider theme={theme(settings.darkMode)}>
      <CssBaseline />
      <Toaster
        position="top-right"
        toastOptions={toastOptions(settings.darkMode)}
      />
      <ApolloProvider client={client}>{Routes}</ApolloProvider>
    </ThemeProvider>
  )
}

export default App
