import { memo } from "react";
import { TContent } from "~/models/content";
import { StyledContainer, ImgPlayer, StyledImage } from "./styles";

export type TPostVideo = Pick<TContent, "thumbnail" | "title">;

function PostVideo({ title, thumbnail }: TPostVideo) {
  return (
    <StyledContainer>
      <ImgPlayer />
      <StyledImage
        loading="lazy"
        height="130"
        width="100%"
        alt={title}
        src={thumbnail}
      />
    </StyledContainer>
  );
}

export default memo(PostVideo);
