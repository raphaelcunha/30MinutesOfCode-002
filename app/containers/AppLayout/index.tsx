import { Outlet } from "react-router-dom";
import Box from "~/components/Box";
import NavBar from "~/components/NavBar";

const AppLayout = () => {
  return (
    <Box sx={{ minHeight: "100vh" }}>
      <NavBar />
      <Box
        sx={{
          pt: {
            xs: 9,
            md: 8,
          },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
};

export default AppLayout;
