import styled from "@emotion/styled";
import { BoxProps } from "@mui/system";
import Box from "~/components/Box";

export type TBackgroundImageContent = { image: string } & BoxProps;

export const CustomCarousel = styled(Box)`
  & .carousel .control-dots .dot {
    width: 6px;
    height: 6px;
    background: #d7cfe6 !important;
    opaticy: 1 !important;
    margin: 0 4px;

    &.selected {
      background: #271b47 !important;
    }
  }
`;
export const ShadowImageContent = styled(Box)`
  height: 211px;
  width: 100%;
  position: absolute;
  top: 0;
`;

export const BackgroundImageContent = styled(Box)<TBackgroundImageContent>`
  background: rgba(0, 0, 0, 0.35);
  background-image: url(${({ image }) => image});
  width: 100%;
  height: 211px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
`;
