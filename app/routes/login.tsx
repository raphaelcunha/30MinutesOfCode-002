/* eslint-disable complexity */
/* eslint-disable max-lines */
import { useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Button, useTheme, useMediaQuery } from "@mui/material";
import Paper from "@mui/material/Paper";
import { useFormik } from "formik";
import * as Yup from "yup";
import LogoWhite from "~/components/LogoWhite";
import LoginDesktop from "~/assets/images/LoginDesktop.png";
import LoginMobile from "~/assets/images/LoginMobile.png";
import Box from "~/components/Box";
import FormControl from "~/components/FormControl";
import FormHelperText from "~/components/FormHelperText";
import Grid from "~/components/Grid";
import IconButton from "~/components/IconButton";
import InputAdornment from "~/components/InputAdornment";
import InputLabel from "~/components/InputLabel";
import Link from "~/components/Link";
import LoadingButton from "~/components/LoadingButton";
import OutlinedInput from "~/components/OutlinedInput";
import TextField from "~/components/TextField";
import Typography from "~/components/Typography";
import useStore from "~/store";

type TSignInForm = {
  email: string;
  password: string;
};

export function ErrorBoundary() {
  return <h3>Whoops. Something went wrong [Login]</h3>;
}

// eslint-disable-next-line complexity
export default function Login() {
  const theme = useTheme();

  const media = useMediaQuery(theme.breakpoints.down("md"));

  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const SignInSchema = Yup.object().shape({
    email: Yup.string()
      .email("Please insert a valid email address")
      .required("This field is required"),
    password: Yup.string().required("This field is required"),
  });

  const formik = useFormik<TSignInForm>({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: SignInSchema,
    onSubmit: async ({ email, password }) => {
      try {
        setIsLoading(true);

        // await signIn({ email, password });
        // await getAccount();
      } finally {
        setIsLoading(false);
      }
    },
  });

  return (
    <Grid
      container
      component="main"
      sx={{ height: "100vh", background: "#FFFFFF" }}
    >
      {media ? (
        <Grid
          item
          xs={12}
          sm={6}
          md={6}
          sx={{
            backgroundImage: `url(${LoginMobile})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: 220,
            paddingTop: 4,
            borderRadius: theme.spacing(0, 0, 5, 0),
          }}
        >
          <LogoWhite width={167} />
        </Grid>
      ) : (
        <Grid
          item
          xs={12}
          sm={6}
          md={6}
          sx={{
            backgroundImage: `url(${LoginDesktop})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: 220,
            padding: 5,
            paddingTop: 10,
            borderRadius: theme.spacing(0, 0, 5, 0),
          }}
        >
          <LogoWhite width={167} />
        </Grid>
      )}

      <Grid
        item
        xs={12}
        sm={6}
        md={6}
        component={Paper}
        elevation={6}
        square
        style={{
          display: "flex",
          justifyContent: "center",
          [theme.breakpoints.up("md")]: {
            alignItems: "center",
          },
        }}
      >
        <Box
          sx={{
            mx: 2,
            display: "flex",
            flexDirection: "column",
            width: "448px",
            [theme.breakpoints.up("md")]: {
              justifyContent: "center",
            },
          }}
        >
          <Typography
            marginBottom="20px"
            marginTop="40px"
            color={theme.palette.primary.main}
            fontWeight={600}
            fontSize="22px"
            variant="h3"
            textAlign="left"
          >
            Sign In
          </Typography>

          <Box component="form" onSubmit={formik.handleSubmit} noValidate>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
            <FormControl margin="normal" required fullWidth variant="outlined">
              <InputLabel
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                htmlFor="password"
              >
                Password
              </InputLabel>
              <OutlinedInput
                id="password"
                type={showPassword ? "text" : "password"}
                value={formik.values.password}
                onChange={formik.handleChange("password")}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      edge="end"
                      onClick={() => {
                        setShowPassword(!showPassword);
                        return showPassword;
                      }}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
              {formik.touched.password && Boolean(formik.errors.password) && (
                <FormHelperText error id="password">
                  {formik.touched.password && formik.errors.password}
                </FormHelperText>
              )}
            </FormControl>

            <Box sx={{ textAlign: "right" }}>
              <Link
                href="/login"
                variant="body2"
                sx={{ textDecoration: "none" }}
              >
                Forgot password?
              </Link>
            </Box>

            <LoadingButton
              loading={isLoading}
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                backgroundColor: theme.palette.secondary.dark,
                textTransform: "none",
                color: "#000",
                fontFamily: "Area Normal",
                ":hover": {
                  backgroundColor: theme.palette.primary.dark,
                  color: theme.palette.neutral.light,
                },
              }}
            >
              Login
            </LoadingButton>

            <Typography
              textAlign="center"
              marginTop={2}
              marginBottom={1}
              variant="body2"
            >
              Don’t have an account?
            </Typography>

            <Button
              component={Link}
              href="/sign-up"
              fullWidth
              sx={{
                mb: 2,
                backgroundColor: "#fff",
                color: "#000",
                fontFamily: "Area Normal",
                textTransform: "none",
                border: `1px solid ${theme.palette.primary.main}`,
                ":hover": {
                  backgroundColor: theme.palette.neutral.light,
                  color: theme.palette.primary.dark,
                  borderColor: theme.palette.primary.dark,
                },
              }}
            >
              Sign Up
            </Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
