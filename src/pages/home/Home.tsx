import { useRecoilState, useRecoilValue } from "recoil"
import { pageHomeUserState } from "./store/homeAtoms"
import { charCountState } from "./store/homeSelectors"

const Home = () => {
  const [user, setUser] = useRecoilState(pageHomeUserState)

  const count = useRecoilValue(charCountState)

  return (
    <div className="App">
      <h1>
        Hola: {user.name} - {count}
      </h1>
      <button onClick={() => setUser({ ...{ name: "Felipe" } })}>
        Set user Felipe
      </button>
    </div>
  )
}

export default Home
