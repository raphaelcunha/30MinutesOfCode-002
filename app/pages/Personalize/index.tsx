import { useState } from "react";
import { useTheme, useMediaQuery } from "@mui/material";
import Paper from "@mui/material/Paper";
import { useFormik } from "formik";
import { useTranslation } from "react-i18next";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { LogoWhite } from "assets/images";
import LoginDesktop from "assets/images/LoginDesktop.png";
import LoginMobile from "assets/images/LoginMobile.png";
import Box from "~/components/Box";
import FormControl from "~/components/FormControl";
import Grid from "~/components/Grid";
import InputLabel from "~/components/InputLabel";
import LoadingButton from "~/components/LoadingButton";
import MenuItem from "~/components/MenuItem";
import Select from "~/components/Select";
import Typography from "~/components/Typography";
import { Tags } from "services/tags";
import useStore from "store";

export default function Personalize() {
  const { t } = useTranslation();
  const theme = useTheme();
  const [isLoading, setIsLoading] = useState(false);
  const { account, addTags } = useStore((state) => state);
  const navigate = useNavigate();

  const { data } = useQuery("getTags", Tags);

  const media = useMediaQuery(theme.breakpoints.down("md"));

  const formik = useFormik({
    initialValues: {
      tag: "",
    },
    onSubmit: async (values) => {
      try {
        setIsLoading(true);
        const tags = [{ id: values.tag }];

        if (account) {
          await addTags({ account, tags });

          navigate("/home");
        }
      } finally {
        setIsLoading(false);
      }
    },
  });

  if (!data) {
    return <>Carregando...</>;
  }

  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
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
            marginBottom="31px"
            marginTop="40px"
            color={theme.palette.primary.main}
            fontWeight={600}
            fontSize="22px"
            variant="h3"
            textAlign="left"
          >
            {t("personalize.welcome")}, {account?.user.name}
          </Typography>

          <Box component="form" onSubmit={formik.handleSubmit} noValidate>
            <FormControl
              fullWidth
              sx={{
                borderColor: "secondary.main",
              }}
            >
              <InputLabel id="tag">
                {t("personalize.what_your_training_level")}
              </InputLabel>
              <Select
                name="tag"
                labelId="tag"
                id="tag"
                value={formik.values.tag}
                label={t("personalize.what_your_training_level")}
                onChange={formik.handleChange}
                required
                fullWidth
                defaultValue="Beginner"
              >
                {data.map((item) => (
                  <MenuItem
                    style={{ textTransform: "capitalize" }}
                    key={item.id}
                    value={item.id}
                  >
                    <Typography style={{ textTransform: "capitalize" }}>
                      {item.level}
                    </Typography>
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            {data && formik.values.tag ? (
              <Typography variant="body1" sx={{ mt: 3 }}>
                {t(
                  `personalize.${
                    data.find((item) => item.id === formik.values.tag)?.level
                  }`
                )}
              </Typography>
            ) : (
              <Typography variant="body1" sx={{ mt: 3 }}>
                {t("personalize.curret_abilities")}
              </Typography>
            )}
            <LoadingButton
              loading={isLoading}
              disabled={!formik.values.tag}
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
              {t("personalize.proceed")}
            </LoadingButton>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
