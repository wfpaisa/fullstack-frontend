import toast from "react-hot-toast"
import { isApolloError, ApolloError } from "@apollo/client"

type TErrors = {
  message: string
  name: string
}

type TStrapiGraphQLError = {
  error: {
    name: string
    message: string
    details: {
      errors: TErrors[]
    }
  }
  code: string
}

/**
 * Alerts for Strapi GraphQL common errors
 * @param err Axios error
 */
const ErrorStrapiAlert = (err: ApolloError | Error) => {
  if (isApolloError(err)) {
    const error = err.graphQLErrors[0].extensions as TStrapiGraphQLError

    const listItems = error.error.details.errors.map(
      (val: { message: string }, index: number) => (
        <li key={index}>{val.message}</li>
      )
    )

    toast.error((t) => {
      return (
        <ul style={{ margin: "0px 0px 0px 18px", padding: "0px" }}>
          {listItems}
        </ul>
      )
    })
  } else {
    toast.error(err.message)
  }
}

export { ErrorStrapiAlert }
