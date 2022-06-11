/* eslint-disable import/no-unresolved */
/* eslint-disable global-require */
import { memo } from "react";
import Box from "~/components/Box";
import { TContent } from "models/content";
import { StyledImage } from "./styles";

export type TPostImageDetail = Pick<TContent, "title" | "thumbnail">;

function PostImageDetail({ title, thumbnail }: TPostImageDetail) {
  if (!title && !thumbnail) return null;
  return (
    <Box
      sx={{
        minHeight: {
          md: 200,
          xs: "auto",
        },
      }}
    >
      <StyledImage loading="lazy" width="100%" alt={title} src={thumbnail} />
    </Box>
  );
}

export default memo(PostImageDetail);
