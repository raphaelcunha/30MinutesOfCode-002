/* eslint-disable global-require */
import { useTheme } from "@mui/material";
import { useQuery } from "react-query";
import Box from "~/components/Box";
import Container from "~/components/Container";
import Skeleton from "~/components/Skeleton";
import ContentPost from "containers/ContentPost";
import { getContentForMe } from "services/content";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function ContentList() {
  const theme = useTheme();

  const queryKey = "getContentForMe";
  const { data } = useQuery(queryKey, getContentForMe);

  if (!data) {
    return (
      <Container maxWidth="lg">
        <Box
          mt={5}
          display="grid"
          gridTemplateColumns={{ xs: "1fr", md: "repeat(3, 1fr)" }}
          gridTemplateRows="minmax(347px, auto)"
          gap={{ xs: 2, md: theme.spacing(0, 2) }}
        >
          <Skeleton variant="rectangular" width="100%" height={300} />
          <Skeleton variant="rectangular" width="100%" height={300} />
          <Skeleton variant="rectangular" width="100%" height={300} />
          <Skeleton variant="rectangular" width="100%" height={300} />
          <Skeleton variant="rectangular" width="100%" height={300} />
          <Skeleton variant="rectangular" width="100%" height={300} />
        </Box>
      </Container>
    );
  }

  return (
    <Container sx={{ pt: 5 }}>
      <Box
        display="grid"
        gridTemplateColumns={{ xs: "1fr", md: "repeat(3, 1fr)" }}
        gridTemplateRows="minmax(347px, auto)"
        gap={{ xs: 2, md: theme.spacing(0, 2) }}
      >
        {data?.map((content) => (
          <ContentPost key={content.id} content={content} queryKey={queryKey} />
        ))}
      </Box>
    </Container>
  );
}

export default ContentList;
