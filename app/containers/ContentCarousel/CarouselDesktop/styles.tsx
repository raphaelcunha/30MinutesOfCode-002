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

export const BackgroundImageContent = styled(Box)<TBackgroundImageContent>`
  background-image: url(${({ image }) => image});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
`;
