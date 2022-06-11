import { memo } from "react";
import Typography from "~/components/Typography";
import { TContent } from "models/content";

export type TPostDescription = Pick<TContent, "description">;

function PostDescription({ description }: TPostDescription) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      sx={{
        mt: 2,
        overflow: "hidden",
        textOverflow: "ellipsis",
        display: "-webkit-box",
        WebkitLineClamp: "2",
        WebkitBoxOrient: "vertical",
      }}
    >
      {description}
    </Typography>
  );
}

export default memo(PostDescription);
