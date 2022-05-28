import { gql, useMutation } from "@apollo/client"
import { useEffect, useState } from "react"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"
import { ErrorStrapiAlert } from "@/utils/alerts"
import { userStore, userModel } from "@/stores/user"

import {
  IconButton,
  InputAdornment,
  OutlinedInput,
  FormControl,
  FormHelperText,
  InputLabel,
  Button,
  TextField,
  Box,
  Grid,
  Link,
} from "@mui/material"

import { VisibilityOff, Visibility } from "@mui/icons-material"

import { useForm, Controller, SubmitHandler } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

interface IFormInput {
  identifier: string
  password: string
  // iceCreamType: {label: string; value: string };
}

const schema = yup
  .object({
    identifier: yup
      .string()
      .email("Email no valido")
      .required("Es requerido ingresar un email"),
    password: yup
      .string()
      .required("Es requerido ingresar una contraseña")
      .min(6, "La contraseña debe tener al menos 6 caracteres"),
  })
  .required()

const Login = () => {
  const [loadingReq, setLoadingReq] = useState(false)
  const [typePassword, setTypePassword] = useState(false)
  const navigate = useNavigate()
  const user = userStore((state) => state)

  const QUERY_FORM_LOGIN = gql`
    mutation LoginData($identifier: String!, $password: String!) {
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
  const defaultValues = {
    identifier: "",
    password: "",
  }

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<IFormInput>({
    defaultValues,
    resolver: yupResolver(schema),
  })

  const onSubmit: SubmitHandler<IFormInput> = async (dataForm) => {
    setLoadingReq(true)

    try {
      // const login = await loginQuery({ variables: dataForm })
      await loginQuery({ variables: dataForm })
      setLoadingReq(false)
    } catch (err: Error | any) {
      setLoadingReq(false)
      ErrorStrapiAlert(err)
      user.setUser({ ...userModel })
    }
  }

  return (
    <Box
      component="form"
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      sx={{ mt: 1 }}
    >
      <Controller
        name="identifier"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            error={!!errors.identifier}
            helperText={errors.identifier && errors.identifier.message}
            margin="normal"
            required
            fullWidth
            id="identifier"
            label="Email"
            autoComplete="identifier"
            autoFocus
            {...field}
          />
        )}
      />

      <Controller
        name="password"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <FormControl
            fullWidth
            required
            variant="outlined"
            error={!!errors.password}
          >
            <InputLabel htmlFor="password">Password</InputLabel>

            <OutlinedInput
              id="password"
              label="Password"
              autoComplete="current-password"
              type={typePassword ? "text" : "password"}
              {...field}
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
            />
            {errors.password && (
              <FormHelperText>{errors.password.message}</FormHelperText>
            )}
          </FormControl>
        )}
      />

      <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
        {loadingReq ? <span>Loading...</span> : "Iniciar sesión"}
      </Button>

      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item>
          <Link href="#" variant="body2" onClick={() => reset()}>
            Reset
          </Link>
        </Grid>

        {/* <Grid item xs>
                <Link href="#" variant="body2" >
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid> */}
      </Grid>
    </Box>
  )
}

export default Login
