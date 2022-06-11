import { memo } from "react";
import { IconShare } from "assets/icon";
import { Typography } from "~/components";
import Button from "~/components/Button";

function PostShare() {
  return (
    <Button
      sx={{ height: 40 }}
      startIcon={<IconShare />}
      variant="outlined"
      style={{ textTransform: "capitalize", borderColor: "#000" }}
    >
      <Typography variant="body1">Share</Typography>
    </Button>
  );
}

export default memo(PostShare);
