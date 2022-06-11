import { styled } from "@mui/material/styles";
import Box from "~/components/Box";

export const StyledContainer = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 536px;
  box-shadow: ${(props) => props.theme.shadows[2]};
  padding: ${(props) => props.theme.spacing(4)};
  background-color: ${(props) => props.theme.palette.background.paper};
  align-items: center;
  margin-left: 8px;
  :focus-visible {
    outline: none;
  }
`;
