import { useRecoilState, useRecoilValue } from "recoil"
import { saludarState } from "./store/saludar"
import { charCountState } from "./store/selectors"

const Home = () => {
  const [text, setText] = useRecoilState(saludarState)
  const count = useRecoilValue(charCountState)

  return (
    <div className="App">
      <h1>
        Home, hola: {text} - {count}
      </h1>
      <button onClick={() => setText("felipe")}>Set text</button>
    </div>
  )
}

export default Home
