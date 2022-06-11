/* eslint-disable global-require */
import { memo } from "react";
import Box from "~/components/Box";
import { TContent } from "models/content";
import { StyledImage } from "./PostImageDetail/styles";

export type TPostImage = Pick<TContent, "title" | "thumbnail">;

function PostImage({ title, thumbnail }: TPostImage) {
  return (
    <Box minHeight={130} width="100%">
      <StyledImage loading="lazy" width="100%" alt={title} src={thumbnail} />
    </Box>
  );
}

export default memo(PostImage);
