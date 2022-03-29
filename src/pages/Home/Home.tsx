import { useRecoilState, useRecoilValue } from "recoil"
import { pageHomeUserState } from "./store/homeAtoms"
import { charCountState } from "./store/homeSelectors"
import { Helmet } from "react-helmet"

import Button from "@mui/material/Button"

const Home = () => {
  const [user, setUser] = useRecoilState(pageHomeUserState)

  const count = useRecoilValue(charCountState)

  return (
    <>
      <Helmet>
        <title>Mi home</title>
      </Helmet>

      <div className="App">
        <h1>
          Hola: {user.name} - Lenght:{count}
        </h1>

        <Button
          variant="contained"
          color="primary"
          onClick={() => setUser({ ...{ name: "Felipe" } })}
        >
          Set user Felipe
        </Button>
      </div>
    </>
  )
}

export default Home
