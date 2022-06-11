import React from "react";
import { useMediaQuery, useTheme } from "@mui/material";
import { useQuery } from "react-query";
import Box from "~/components/Box";
import Container from "~/components/Container";
import Skeleton from "~/components/Skeleton";
import { getContentForMe } from "services/content";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CarouselDesktop from "./CarouselDesktop";
import CarouselMobile from "./CarouselMobile";

const Carousel = () => {
  const theme = useTheme();
  const { data } = useQuery("getContentForMe", getContentForMe);

  const media = useMediaQuery(theme.breakpoints.down("md"));

  if (!data) {
    return (
      <Container maxWidth="lg">
        <Box mt={5}>
          <Skeleton variant="rectangular" width="100%" height={473} />
        </Box>
      </Container>
    );
  }

  return (
    <Box>
      {media ? (
        <CarouselMobile contents={data} />
      ) : (
        <CarouselDesktop contents={data} />
      )}
    </Box>
  );
};

export default Carousel;
