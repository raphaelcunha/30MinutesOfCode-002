/* eslint-disable global-require */
import { memo } from "react";
import { useTheme } from "@mui/material";
import { Carousel as CarouselComponent } from "react-responsive-carousel";
import Box from "~/components/Box";
import ContentTags from "~/components/ContentTags";
import Typography from "~/components/Typography";
import { TContent } from "models/content";
import {
  CustomCarousel,
  ShadowImageContent,
  BackgroundImageContent,
} from "./styles";
import "react-responsive-carousel/lib/styles/carousel.min.css";

type TCarouselProps = {
  contents: TContent[];
};

const CarouselMobile = ({ contents }: TCarouselProps) => {
  const theme = useTheme();

  return (
    <CustomCarousel>
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
              <ShadowImageContent />
              <BackgroundImageContent
                image={require("../../../assets/images/content/example2.jpg")}
              >
                <BackgroundImageContent
                  image={content.richText}
                  sx={{
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    width: 375,
                    px: 3,
                    pb: 4,
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
                    fontSize="22px"
                    lineHeight="26px"
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
  );
};

export default memo(CarouselMobile);
