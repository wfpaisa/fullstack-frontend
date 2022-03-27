import { useRecoilState } from "recoil"
import { saludarState } from "@/pages/home/store/saludar"

const About = () => {
  const [text, setText] = useRecoilState(saludarState)
  return (
    <div className="App">
      <h1>About: {text}</h1>
      <button onClick={() => setText("matias")}>Set text</button>
    </div>
  )
}

export default About
