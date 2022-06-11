/* eslint-disable global-require */
import { memo } from "react";
import { useTheme } from "@mui/material";
import { Carousel as CarouselComponent } from "react-responsive-carousel";
import Box from "~/components/Box";
import Container from "~/components/Container";
import ContentTags from "~/components/ContentTags";
import Typography from "~/components/Typography";
import { TContent } from "models/content";
import { CustomCarousel, BackgroundImageContent } from "./styles";
import "react-responsive-carousel/lib/styles/carousel.min.css";

type TCarouselProps = {
  contents: TContent[];
};
const CarouselDesktop = ({ contents }: TCarouselProps) => {
  const theme = useTheme();

  return (
    <Container>
      <CustomCarousel sx={{ mt: 5 }}>
        <CarouselComponent
          infiniteLoop
          showArrows={false}
          showThumbs={false}
          showStatus={false}
          autoPlay
        >
          {contents.map((content) => {
            return (
              <Box key={content.id} sx={{ position: "relative" }}>
                <BackgroundImageContent
                  image={require("../../../assets/images/content/example2.jpg")}
                  sx={{ borderRadius: "8px" }}
                >
                  <BackgroundImageContent
                    image={content.richText}
                    sx={{
                      flexDirection: "column",
                      justifyContent: "flex-end",
                      height: "473px",
                      padding: "60px",
                    }}
                  >
                    <Box display="flex" alignItems="flex-start">
                      {content.tags.map(({ tag }) => (
                        <ContentTags
                          hashtagColor={theme.palette.primary.dark}
                          borderColor={theme.palette.secondary.dark}
                          fontColor="#FFF"
                          label={tag.sport}
                          key={tag.level}
                        />
                      ))}
                    </Box>
                    <Typography
                      fontFamily="Crimson Text"
                      color={theme.palette.primary.contrastText}
                      fontSize="48px"
                      lineHeight="48px"
                      fontWeight={600}
                      mb={1}
                      mt={1}
                      textAlign="left"
                    >
                      {content.title}
                    </Typography>
                  </BackgroundImageContent>
                </BackgroundImageContent>
              </Box>
            );
          })}
        </CarouselComponent>
      </CustomCarousel>
    </Container>
  );
};

export default memo(CarouselDesktop);
