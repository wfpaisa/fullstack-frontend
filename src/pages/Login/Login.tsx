import { useEffect } from "react"
import { Helmet } from "react-helmet"
import { Avatar, Link, Paper, Box, Grid, Typography } from "@mui/material"
import { LockOutlined } from "@mui/icons-material"
import { useNavigate } from "react-router-dom"
import { userStore } from "@/stores/user"

import LoginForm from "./LoginForm"

const Login = () => {
  const navigate = useNavigate()
  const user = userStore((state) => state)

  // Component create
  useEffect(() => {
    if (user.token) navigate("/") // if is login, redirect to home
  }, [])

  return (
    <>
      <Helmet>
        <title>Iniciar sesión</title>
      </Helmet>

      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: "url(https://source.unsplash.com/random)",
          backgroundRepeat: "no-repeat",
          backgroundColor: (t) =>
            t.palette.mode === "light"
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlined />
          </Avatar>
          <Typography component="h1" variant="h5">
            Iniciar sesión
          </Typography>

          <LoginForm />

          <Typography
            variant="body2"
            color="text.secondary"
            align="center"
            sx={{ mt: 5 }}
          >
            {"Copyright © "}
            <Link color="inherit" href="https://teractivo.com/">
              Teractivo
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Box>
      </Grid>
    </>
  )
}

export default Login
