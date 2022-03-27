import { useRecoilState, useRecoilValue } from "recoil"
import { pageHomeUserState } from "./store/homeAtoms"
import { charCountState } from "./store/homeSelectors"
import { Helmet } from "react-helmet"

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
          Hola: {user.name} - {count}
        </h1>
        <button onClick={() => setUser({ ...{ name: "Felipe" } })}>
          Set user Felipe
        </button>
      </div>
    </>
  )
}

export default Home
