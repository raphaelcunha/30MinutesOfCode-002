import { memo } from "react";
import Typography from "~/components/Typography";
import { TContent } from "models/content";

export type TPostTitle = Pick<TContent, "title">;

function PostTitle({ title }: TPostTitle) {
  return (
    <Typography
      variant="h3"
      color="green.primary"
      mt={2}
      sx={{
        overflow: "hidden",
        textOverflow: "ellipsis",
        display: "-webkit-box",
        WebkitLineClamp: "2",
        WebkitBoxOrient: "vertical",
      }}
    >
      {title}
    </Typography>
  );
}

export default memo(PostTitle);
