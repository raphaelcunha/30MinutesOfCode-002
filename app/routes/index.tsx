import Logo from "~/components/Logo";
import AppBar from "~/components/AppBar";
import Button from "~/components/Button";
import Container from "~/components/Container";
import Toolbar from "~/components/Toolbar";
import Typography from "~/components/Typography";

export function ErrorBoundary() {
  return <h3>Whoops. Something went wrong [Repositories]</h3>;
}

export default function Home() {
  return (
    <>
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            <Logo />
          </Typography>
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
          Welcome
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          component="p"
        >
          Coterie
        </Typography>
      </Container>
    </>
  );
}
