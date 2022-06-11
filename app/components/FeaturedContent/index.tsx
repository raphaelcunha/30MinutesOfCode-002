import { useQuery } from "react-query";
import Box from "~/components/Box";
import Grid from "~/components/Grid";
import Typography from "~/components/Typography";
import { getContentForMe } from "services/content";
import FeaturedContentCard from "./FeaturedContentCard";

export default function FeaturedContent() {
  const { data } = useQuery(["getContentForMe"], getContentForMe);

  return (
    <Box mt={2}>
      <Typography variant="h3" marginBottom={2} color="green.primary">
        Featured Content
      </Typography>
      <Grid
        container
        spacing={2}
        justifyContent="space-between"
        alignItems="center"
      >
        {data?.map((content) => (
          <Grid item xs={12} md={4} key={content.id}>
            <FeaturedContentCard content={content} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
