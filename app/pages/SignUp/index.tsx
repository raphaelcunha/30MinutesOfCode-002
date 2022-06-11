/* eslint-disable max-lines */
import { useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Button, useTheme, useMediaQuery } from "@mui/material";
import Paper from "@mui/material/Paper";
import { useFormik } from "formik";
import { useTranslation } from "react-i18next";
import PasswordChecklist from "react-password-checklist";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { LogoWhite } from "assets/images";
import LoginDesktop from "assets/images/LoginDesktop.png";
import LoginMobile from "assets/images/LoginMobile.png";
import Missing from "assets/images/missing.png";
import Success from "assets/images/success.png";
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
import useStore from "store";

// eslint-disable-next-line complexity
export default function SignUp() {
  const { t } = useTranslation();
  const theme = useTheme();

  const media = useMediaQuery(theme.breakpoints.down("md"));

  const { signUp, signIn, getAccount } = useStore((state) => state);
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const SignUpSchema = Yup.object().shape({
    name: Yup.string().required("This field is required"),
    email: Yup.string()
      .email("Please insert a valid email address")
      .required("This field is required"),
    password: Yup.string()
      .min(8, "Too Short!")
      .max(50, "Too Long!")
      .matches(
        /^(?=.*\d)(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
        "Must contain at least: 8 characters, uppercase letter(s) and number(s)"
      )
      .required("This field is required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
    },
    validationSchema: SignUpSchema,
    onSubmit: async ({ name, email, password }) => {
      try {
        setIsLoading(true);

        await signUp({
          email,
          password,
          user: {
            name,
          },
        });
        await signIn({ email, password });
        await getAccount();

        navigate("/personalize");
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
            {t("sign_up.sign_up")}
          </Typography>
          <Box component="form" onSubmit={formik.handleSubmit} noValidate>
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
              autoComplete="name"
              autoFocus
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
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

            {formik.values.password && (
              <>
                <Typography marginTop={2} fontWeight={700} fontSize="12px">
                  {t("sign_up.password_must_have")}
                </Typography>
                <Box
                  style={{
                    fontSize: "12px",
                    color: theme.palette.text.secondary,
                  }}
                >
                  <PasswordChecklist
                    rules={["minLength", "number", "capital"]}
                    minLength={8}
                    value={formik.values.password}
                    messages={{
                      minLength: t(
                        "sign_up.password_list_check_num_characters"
                      ),
                      number: t("sign_up.password_list_check_number"),
                      capital: t("sign_up.password_list_check_upper_case"),
                    }}
                    iconSize={10}
                    iconComponents={{
                      ValidIcon: (
                        <img
                          width="10px"
                          height="8px"
                          style={{ marginRight: "5px" }}
                          src={Success}
                          alt="success"
                        />
                      ),
                      InvalidIcon: (
                        <img
                          width="4px"
                          height="4px"
                          style={{ marginRight: "11px" }}
                          src={Missing}
                          alt="missing"
                        />
                      ),
                    }}
                  />
                </Box>
              </>
            )}
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
              {t("sign_up.sign_up")}
            </LoadingButton>
            <Typography
              textAlign="center"
              marginTop={2}
              marginBottom={2}
              variant="body2"
            >
              {t("sign_up.have_account")}
            </Typography>
            <Button
              component={Link}
              href="/login"
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
              {t("sign_in.sign_in")}
            </Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
