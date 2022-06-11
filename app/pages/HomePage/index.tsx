import Container from "~/components/Container";
import FeaturedContent from "~/components/FeaturedContent";
import Grid from "~/components/Grid";
import LatestsMoments from "~/components/LatestsMoments";
import UserCard from "~/components/UserCard";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const HomePage = () => {
  return (
    <Container sx={{ pt: 5 }}>
      <Grid container spacing={2} justifyContent="space-between">
        <Grid item xs={12} md={4}>
          <UserCard />
        </Grid>
        <Grid item xs={12} md={8}>
          <LatestsMoments />
        </Grid>
      </Grid>
      <FeaturedContent />
    </Container>
  );
};

export default HomePage;
