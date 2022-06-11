/* eslint-disable react/require-default-props */
import { memo } from "react";
import { Fade, useTheme } from "@mui/material";
import { ReactComponent as ReactionImg } from "assets/images/react.svg";
import Typography from "~/components/Typography";
import { EReactions, IReaction } from "models/reactions";
import { StyledButton } from "./styles";

export interface IReactionButtonProps {
  onClick: () => void;
  loading: boolean;
  reaction?: {
    id: string;
    reaction: IReaction;
  };
}

function ReactionButton({ onClick, reaction, loading }: IReactionButtonProps) {
  const theme = useTheme();

  const hasReaction = reaction
    ? Object.entries(EReactions).find(([, val]) => val === reaction?.reaction)
    : null;

  const ReactionIcon = () =>
    hasReaction ? (
      <div>{hasReaction[1]}</div>
    ) : (
      <ReactionImg
        color={theme.palette.primary.light}
        width="22px"
        height="19px"
      />
    );

  return (
    <Fade in>
      <StyledButton
        disabled={loading}
        reacted={hasReaction ? 1 : 0}
        onClick={onClick}
        type="button"
      >
        <ReactionIcon />
        <Typography sx={{ marginLeft: "10px" }} variant="body1">
          {hasReaction ? hasReaction[0] : "React"}
        </Typography>
      </StyledButton>
    </Fade>
  );
}

export default memo(ReactionButton);
