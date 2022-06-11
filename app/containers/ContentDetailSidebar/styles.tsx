import { styled } from "@mui/material/styles";
import Box from "~/components/Box";

export const StyledSidebar = styled(Box)`
  background: ${(props) => props.theme.palette.primary.light};
  width: 342px;
  ${(props) => props.theme.breakpoints.down("md")} {
    background: ${(props) => props.theme.palette.primary.light};
    padding: ${(props) => props.theme.spacing(2)};
    width: 100%;
  }
`;
