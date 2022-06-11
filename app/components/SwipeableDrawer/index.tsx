import * as React from "react";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Box from "~/components/Box";
import { StyledSwipeableIcon } from "./styles";

interface SwipeableTemporaryDrawerProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  children: React.ReactNode;
}

export default function SwipeableTemporaryDrawer({
  open,
  setOpen,
  children,
}: SwipeableTemporaryDrawerProps) {
  const toggleDrawer =
    (show: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setOpen(show);
    };

  return (
    <SwipeableDrawer
      anchor="bottom"
      open={open}
      onClose={toggleDrawer(false)}
      onOpen={toggleDrawer(true)}
    >
      <Box
        pt={1}
        sx={{
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <StyledSwipeableIcon />
      </Box>

      <Box p={2}>{children}</Box>
    </SwipeableDrawer>
  );
}
