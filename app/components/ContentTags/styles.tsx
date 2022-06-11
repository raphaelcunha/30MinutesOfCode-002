import { styled } from "@mui/material";
import Button from "~/components/Button";

export const ButtonTag = styled(Button)`
  max-height: 22px;
  padding: ${({ theme }) => theme.spacing(1)};
  min-width: auto;
  text-transform: capitalize;
  border-radius: 16px;
  border: ${({ theme }) => `1px solid ${theme.palette.secondary.dark}`};
  ${({ theme }) => theme.typography.caption};
  color: ${({ theme }) => theme.palette.primary.dark};
  padding: 0 10px;
  & > .MuiButton-startIcon {
    margin: 0;
    margin-right: 5px;
  }
`;
