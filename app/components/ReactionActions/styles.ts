import { styled } from "@mui/material";
import Box from "~/components/Box";

export const StyledActionsContainer = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: #f0f1f9;
  border: 1px solid #cebfed;
  padding: 6px 8px;
  box-shadow: ${(props) => props.theme.shadows[3]};
  border-radius: ${(props) => props.theme.spacing(12)};
  margin-left: 0 !important;
  margin-top: -46px;
  position: absolute;
  z-index: 1;
`;

export const StyledActionBox = styled(Box)`
  width: 32px;
`;

export const StyledActions = styled(Box)`
  text-align: center;
  font-size: 18px;
  cursor: pointer;
  transition: ${(props) =>
    props.theme.transitions.create(["background-color", "transform"], {
      duration: props.theme.transitions.duration.standard,
    })};
  &:hover {
    transform: scale(1.3);
  }
`;
