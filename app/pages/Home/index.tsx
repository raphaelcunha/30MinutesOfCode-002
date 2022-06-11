import { useTranslation } from "react-i18next";
import Logo from "~/components/Logo";
import AppBar from "~/components/AppBar";
import Button from "~/components/Button";
import Container from "~/components/Container";
import Toolbar from "~/components/Toolbar";
import Typography from "~/components/Typography";

export default function Home() {
  const { t } = useTranslation();

  return (
    <>
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar>
          <Button href="/login" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
      <Container maxWidth="sm" component="main" sx={{ pt: 18, pb: 6 }}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          {t("home.welcome")}
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          component="p"
        >
          {t("home.main_message")}
        </Typography>
      </Container>
    </>
  );
}
