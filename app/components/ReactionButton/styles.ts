import { styled } from "@mui/material";
import Button from "~/components/Button";

interface StyledButtonProps {
  reacted: number;
}

export const StyledButton = styled(Button)<StyledButtonProps>`
  display: flex;
  height: 40px;
  font-family: "Area Normal";
  align-items: center;
  justify-content: center;
  text-transform: none;
  border-radius: 4px;
  padding: 10px 16px;
  color: ${(props) => props.theme.palette.primary.dark};
  box-shadow: ${(props) => props.theme.shadows[2]};
  border: ${(props) =>
    props.reacted ? `1px solid ${props.theme.palette.primary.dark}` : ""};
  background-color: ${(props) =>
    props.reacted
      ? props.theme.palette.secondary.light
      : props.theme.palette.secondary.dark};
  :hover {
    box-shadow: ${(props) => props.theme.shadows[0]};
    background-color: ${(props) => props.theme.palette.secondary.main};
  }
`;
