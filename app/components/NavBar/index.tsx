import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { useMediaQuery, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Link as LinkRouter } from "react-router-dom";
import { IconUserCircle } from "assets/icon";
import { Logo } from "assets/images";
import AppBar from "~/components/AppBar";
import Box from "~/components/Box";
import Container from "~/components/Container";
import Drawer from "~/components/Drawer";
import IconButton from "~/components/IconButton";
import Link from "~/components/Link";
import Stack from "~/components/Stack";
import Toolbar from "~/components/Toolbar";
import Typography from "~/components/Typography";
import useStore from "store";

function NavBar() {
  const { account } = useStore();
  const themeHook = useTheme();
  const media = useMediaQuery(themeHook.breakpoints.down("md"));

  const { t } = useTranslation();

  const [open, setOpen] = React.useState<boolean>(false);

  const NavMenu = () => {
    return (
      <>
        <Stack spacing={5} direction={{ xs: "column", md: "row" }}>
          <Link
            variant="body1"
            color="primary.main"
            component={LinkRouter}
            underline="none"
            to="/home"
          >
            {t("common.menu.home")}
          </Link>
          <Link
            variant="body1"
            color="primary.main"
            component={LinkRouter}
            underline="none"
            to="/content"
          >
            {t("common.menu.content")}
          </Link>
          <Link
            variant="body1"
            color="primary.main"
            component={LinkRouter}
            underline="none"
            to="/moments"
          >
            {t("common.menu.moments")}
          </Link>
          <Link
            variant="body1"
            color="primary.main"
            component={LinkRouter}
            underline="none"
            to="/progress"
          >
            {t("common.menu.progress")}
          </Link>
        </Stack>
        <Link component={LinkRouter} underline="none" to="/profile">
          <Stack spacing={1} direction="row" alignItems="center">
            <IconUserCircle />
            <Typography variant="body1" color="primary.main">
              {account?.user.name || "Not Found"}
            </Typography>
          </Stack>
        </Link>
      </>
    );
  };

  return (
    <AppBar
      position="fixed"
      color="inherit"
      elevation={0}
      sx={{
        maxHeight: 80,
        py: (theme) => theme.spacing(2),
        border: 0,
        top: 0,
        zIndex: (theme) => theme.zIndex.appBar,
        backgroundColor: (theme) => theme.palette.neutral.light,
      }}
    >
      <Container>
        <Toolbar
          sx={{
            "&.MuiToolbar-root": {
              padding: 0,
              minHeight: "auto",
              justifyContent: "space-between",
            },
          }}
        >
          <Logo height="32px" />
          {media && (
            <IconButton
              edge="start"
              color="primary"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={() => setOpen(!open)}
            >
              <MenuIcon />
            </IconButton>
          )}
          {!media && <NavMenu />}
        </Toolbar>
      </Container>
      <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
        {media && (
          <Box minWidth="60vw" py={4} px={3}>
            <NavMenu />
          </Box>
        )}
        {!media && <NavMenu />}
      </Drawer>
    </AppBar>
  );
}

export default NavBar;
