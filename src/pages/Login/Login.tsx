import { Helmet } from "react-helmet"
import Avatar from "@mui/material/Avatar"
import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"
import Link from "@mui/material/Link"
import Paper from "@mui/material/Paper"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import LockOutlinedIcon from "@mui/icons-material/LockOutlined"
import Typography from "@mui/material/Typography"
import { gql, useMutation } from "@apollo/client"
import { useEffect, useState } from "react"

import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"
import { ErrorStrapiAlert } from "@/utils/alerts"

import { userStore, userModel } from "@/stores/user"
import FormControl from "@mui/material/FormControl"
import InputLabel from "@mui/material/InputLabel"
import OutlinedInput from "@mui/material/OutlinedInput"
import InputAdornment from "@mui/material/InputAdornment"
import IconButton from "@mui/material/IconButton"
import VisibilityOff from "@mui/icons-material/VisibilityOff"
import Visibility from "@mui/icons-material/Visibility"

const Login = () => {
  const [loadingReq, setLoadingReq] = useState(false)
  const [typePassword, setTypePassword] = useState(false)
  const navigate = useNavigate()
  const user = userStore((state) => state)

  const QUERY_FORM_LOGIN = gql`
    mutation ($identifier: String!, $password: String!) {
      login(input: { identifier: $identifier, password: $password }) {
        jwt
        user {
          id
          username
          email
          confirmed
          blocked
        }
      }
    }
  `
  const [loginQuery, { data, loading }] = useMutation(QUERY_FORM_LOGIN)

  /**
   * Login
   */
  useEffect(() => {
    // When login is successful, set the user state
    if (loading === false && data) {
      user.setUser({
        token: data.login.jwt,
        ...data.login.user,
      })

      setLoadingReq(false)
      toast.success("Login correcto")
      navigate("/")
    }
  }, [loading, data])

  /**
   * Form submit
   */
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    setLoadingReq(true)

    try {
      const dataForm = new FormData(event.currentTarget)

      const dataFormUser = {
        identifier: dataForm.get("email"),
        password: dataForm.get("password"),
      }
      await loginQuery({ variables: dataFormUser })
    } catch (err: Error | any) {
      setLoadingReq(false)
      ErrorStrapiAlert(err)
      user.setUser({ ...userModel })
    }
  }

  return (
    <>
      <Helmet>
        <title>Login</title>
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
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />

            <FormControl fullWidth required variant="outlined">
              <InputLabel htmlFor="password">Password</InputLabel>
              <OutlinedInput
                id="password"
                name="password"
                autoComplete="current-password"
                type={typePassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => setTypePassword(!typePassword)}
                      edge="end"
                    >
                      {typePassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              {loadingReq ? <span>Loading...</span> : "Iniciar sesión"}
            </Button>
            {/* <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2" >
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid> */}
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
        </Box>
      </Grid>
    </>
  )
}

export default Login
