import { ThemeProvider } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"
import { theme, toastOptions } from "@/styles/Theme"
import routes from "@/routes/index"
import { useRoutes } from "react-router-dom"
import { Toaster } from "react-hot-toast"

import { settingsStore } from "@/stores/settings"
import { userStore } from "@/stores/user"
import {
  ApolloProvider,
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client"
import { setContext } from "@apollo/client/link/context"

const App = () => {
  const Routes = useRoutes(routes)
  const settings = settingsStore((state) => state)
  const user = userStore((state) => state)

  const VITE_GRAPHQL_URI = import.meta.env.VITE_GRAPHQL_URI
  // console.log("Theme", Theme("true"))

  // GraphQL client
  const httpLink = createHttpLink({ uri: VITE_GRAPHQL_URI })
  const authLink = setContext((_, { headers }) => {
    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        authorization: user.token ? `Bearer ${user.token}` : "",
      },
    }
  })

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
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
