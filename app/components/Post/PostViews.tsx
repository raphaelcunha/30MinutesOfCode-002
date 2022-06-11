import { memo } from "react";
import Typography from "~/components/Typography";

function PostViews({ views }: { views: number }) {
  return (
    <Typography variant="overline" color="primary.dark">
      {views} views
    </Typography>
  );
}

export default memo(PostViews);
