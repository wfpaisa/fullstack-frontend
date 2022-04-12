import toast from "react-hot-toast"
import axios from "axios"

/**
 * Alerts for strapi common errors
 * @param err Axios error
 */
const ErrorStrapiAlert = (err: Error | any) => {
  console.log("->", err.graphQLErrors[0].extensions.error)
  let error = {}

  // debugger

  if (err.graphQLErrors) {
    error = err.graphQLErrors[0].extensions.error
  }

  if (axios.isAxiosError(err)) {
    // console.log("err", err)
    error = err.response?.data
  }

  // if (error.error.details.errors) {

  if (error.details) {
    const listItems = error.details.errors.map(
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
// export default ErrorStrapiAlert
