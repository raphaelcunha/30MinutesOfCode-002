import React from "react";
import { Logo } from "~/assets/images";
import Box from "~/components/Box";
import CircularProgress from "~/components/CircularProgress";

function AppLoading() {
  return (
    <Box
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
      >
        <Box>
          <Logo width={167} />
        </Box>
        <Box ml={-2}>
          <CircularProgress size={30} color="primary" />
        </Box>
      </Box>
    </Box>
  );
}

export default AppLoading;
