import styled from "@emotion/styled";
import { BoxProps } from "@mui/system";
import Box from "~/components/Box";

export type TBackgroundImageContent = { image: string } & BoxProps;

export const BackgroundImageContent = styled(Box)<TBackgroundImageContent>`
  background-image: linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)),
    url(${({ image }) => image});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;

  flex-direction: column;
  justify-content: flex-end;
  height: 211px;
  padding: 24px 16px;
  border-radius: 4px;
`;
