import { useTheme } from "@mui/material";
import Box from "~/components/Box";
import ContentTags from "~/components/ContentTags";
import Stack from "~/components/Stack";
import Typography from "~/components/Typography";
import { TContent } from "models/content";
import { BackgroundImageContent } from "./styles";

type TContentPostProps = {
  content: TContent;
};

export default function FeaturedContentCard({ content }: TContentPostProps) {
  const theme = useTheme();

  const FeaturedContentCardHeader = () => {
    return (
      <>
        <Box display="flex" alignItems="flex-start">
          <Stack direction="row" spacing={1} mt={3} mb={1}>
            {content.tags.map((value) => (
              <>
                <ContentTags
                  hashtagColor="#FFF"
                  borderColor="#FFF"
                  fontColor="#FFF"
                  key={value.tag.sport}
                  label={value.tag.sport}
                />
                <ContentTags
                  hashtagColor="#FFF"
                  borderColor="#FFF"
                  fontColor="#FFF"
                  key={value.tag.level}
                  label={value.tag.level}
                />
              </>
            ))}
          </Stack>
        </Box>
        <Typography
          variant="h3"
          color={theme.palette.primary.contrastText}
          fontSize="22px"
          lineHeight="26.4px"
          fontWeight={600}
          mb={1}
          textAlign="left"
        >
          {content.title}
        </Typography>
      </>
    );
  };

  const PostMedia = () => {
    const image = (
      <BackgroundImageContent image={content.thumbnail}>
        <FeaturedContentCardHeader />
      </BackgroundImageContent>
    );

    return image;
  };

  return (
    <Box mb={2}>
      <PostMedia />
    </Box>
  );
}
