import React from "react";
import { Backdrop, Fade, Modal, useTheme } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Box, Typography, SwipeableDrawer } from "~/components";
import Divider from "~/components/Divider";
import { TContent, TContentReaction } from "models/content";
import { StyledContainer } from "./styles";

interface IReactionListProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  content: TContent;
}

function ReactionList({ open, setOpen, content }: IReactionListProps) {
  const theme = useTheme();
  const isDownMd = useMediaQuery(theme.breakpoints.down("md"));

  const ListTitle = () => {
    return (
      <Typography variant="h3" color="success.main" fontWeight={600} pb={2}>
        Reactions
      </Typography>
    );
  };

  const ListItem = ({ reaction }: { reaction: TContentReaction }) => {
    return (
      <Box display="flex" mb={1} key={reaction.userId}>
        <Typography fontSize={18} mr={1}>
          {reaction.reaction.reaction}
        </Typography>
        <Typography>{reaction.user.name}</Typography>
      </Box>
    );
  };

  const List = () => {
    return (
      <Box>
        <ListTitle />
        <Divider sx={{ mb: 1 }} />
        <Box py={1} sx={{ maxHeight: 300, overflow: "auto" }}>
          {content.reactions.map((reaction) => {
            return <ListItem reaction={reaction} key={reaction.userId} />;
          })}
        </Box>
      </Box>
    );
  };

  const SwipeableList = () => {
    return (
      <SwipeableDrawer open={open} setOpen={setOpen}>
        <List />
      </SwipeableDrawer>
    );
  };

  const ModalList = () => {
    return (
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        disableEnforceFocus
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <StyledContainer>
            <List />
          </StyledContainer>
        </Fade>
      </Modal>
    );
  };

  return isDownMd ? <SwipeableList /> : <ModalList />;
}

export default ReactionList;
