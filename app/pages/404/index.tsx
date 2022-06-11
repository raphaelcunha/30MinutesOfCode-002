import { Logo } from "assets/images";
import AppBar from "~/components/AppBar";
import Button from "~/components/Button";
import Container from "~/components/Container";
import Toolbar from "~/components/Toolbar";
import Typography from "~/components/Typography";

function index() {
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
            <Logo height="32px" />
          </Typography>
          <Button href="/login" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
      <Container maxWidth="sm" component="main" sx={{ pt: 18, pb: 6 }}>
        Not found page - 404
      </Container>
    </>
  );
}

export default index;
