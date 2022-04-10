import toast from "react-hot-toast"
import axios from "axios"

/**
 * Alerts for strapi common errors
 * @param err Axios error
 */
const ErrorStrapiAlert = (err: Error) => {
  if (axios.isAxiosError(err)) {
    // console.log("err", err)

    if (err.response?.data.error.details.errors) {
      const listItems = err.response?.data.error.details.errors.map(
        (val: { message: string }, index: number) => (
          <li key={index}>{val.message}</li>
        )
      )

      toast.error((t) => {
        return (
          <div style={{ marginLeft: "10px" }}>
            <b>Error {err.response?.status}</b>

            <ul style={{ margin: "0px 0px 0px 18px", padding: "0px" }}>
              {listItems}
            </ul>
            {/* <button onClick={() => toast.dismiss(t.id)}>Dismiss</button> */}
          </div>
        )
      })
    } else {
      console.log("Ver para manejar error de strapi:", err)
      toast.error(err.message)
    }
  } else {
    toast.error(`Error: ${err.message}`)
  }
}

export { ErrorStrapiAlert }
// export default ErrorStrapiAlert
