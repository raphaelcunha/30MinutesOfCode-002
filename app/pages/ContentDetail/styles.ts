import { styled } from "@mui/material/styles";
import Box from "~/components/Box";

export const StyledContainer = styled(Box)`
  background: linear-gradient(
    190deg,
    rgba(176, 219, 190, 0.22) 22.54%,
    rgba(176, 219, 190, 0) 62.8%
  );
`;

export const StyledContent = styled(Box)`
  padding-left: 24px;

  ${(props) => props.theme.breakpoints.down("sm")} {
    padding-left: 0;
  }
`;

export const StyledSidebar = styled(Box)`
  display: flex;
  justify-content: flex-end;
  background: ${(props) => props.theme.palette.primary.light};
`;

export const LeftContent = styled("div")``;

export const RightContent = styled("div")`
  background: ${(props) => props.theme.palette.primary.light};
`;
