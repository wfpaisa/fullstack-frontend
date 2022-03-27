import { useRecoilState } from "recoil"
import { pageHomeUserState } from "@/pages/home/store/homeAtoms"
import { Helmet } from "react-helmet"

const About = () => {
  const [user, setUser] = useRecoilState(pageHomeUserState)
  return (
    <>
      <Helmet>
        <title>Mi about</title>
      </Helmet>

      <div className="App">
        <h1>About: {user.name}</h1>
        <button onClick={() => setUser({ ...{ name: "Antonio" } })}>
          Set user Antonio
        </button>
      </div>
    </>
  )
}

export default About
