import { useRef } from "react";
import { Grow } from "@mui/material";
import { useOnClickOutside } from "usehooks-ts";
import Tooltip from "~/components/Tooltip";
import { EReactions } from "models/reactions";
import {
  StyledActionBox,
  StyledActions,
  StyledActionsContainer,
} from "./styles";

interface IReactionActionsProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  onSelect: (key: string, value: string) => void;
}

function ReactionActions({ open, setOpen, onSelect }: IReactionActionsProps) {
  const ref = useRef(null);

  const handleClickOutside = () => setOpen(false);

  const handleClickInside = (key: string, value: string) =>
    onSelect(key, value);

  useOnClickOutside(ref, handleClickOutside);

  if (!open) return null;

  return (
    <Grow in={open}>
      <StyledActionsContainer ref={ref}>
        {Object.entries(EReactions).map(([key, value]) => {
          return (
            <Tooltip key={key} title={key} placement="top">
              <StyledActionBox onClick={() => handleClickInside(key, value)}>
                <StyledActions>{value}</StyledActions>
              </StyledActionBox>
            </Tooltip>
          );
        })}
      </StyledActionsContainer>
    </Grow>
  );
}

export default ReactionActions;
