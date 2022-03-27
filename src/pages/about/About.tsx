import { useRecoilState } from "recoil"
import { pageHomeUserState } from "@/pages/home/store/homeAtoms"

const About = () => {
  const [user, setUser] = useRecoilState(pageHomeUserState)
  return (
    <div className="App">
      <h1>About: {user.name}</h1>
      <button onClick={() => setUser({ ...{ name: "Antonio" } })}>
        Set user Antonio
      </button>
    </div>
  )
}

export default About
