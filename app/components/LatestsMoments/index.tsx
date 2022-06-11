import Box from "~/components/Box";
import Grid from "~/components/Grid";
import Typography from "~/components/Typography";

export default function LatestsMoments() {
  return (
    <Box sx={{ height: "330px" }}>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        marginBottom="10px"
      >
        <Typography variant="h3" color="green.primary">
          Latests Moments
        </Typography>
        <Typography variant="caption" color="purple.primary">
          View all
        </Typography>
      </Box>
      <Grid
        container
        spacing={2}
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              background: "#FFF",
              padding: "40px",
              height: "120px",
              borderRadius: "10px",
            }}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <Box
            sx={{
              background: "#FFF",
              padding: "40px",
              height: "120px",
              borderRadius: "10px",
            }}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <Box
            sx={{
              background: "#FFF",
              padding: "40px",
              height: "120px",
              borderRadius: "10px",
            }}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <Box
            sx={{
              background: "#FFF",
              padding: "40px",
              height: "120px",
              borderRadius: "10px",
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
