import { useRecoilState, useRecoilValue } from "recoil"
import { pageHomeUserState } from "./store/homeAtoms"
import { charCountState } from "./store/homeSelectors"
import { Helmet } from "react-helmet"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Typography from "@mui/material/Typography"
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

        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="140"
            image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              onClick={() => setUser({ ...{ name: "Felipe" } })}
            >
              Set Felipe
            </Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </div>
    </>
  )
}

export default Home
