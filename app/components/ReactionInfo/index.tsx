/* eslint-disable no-underscore-dangle */
import { useState } from "react";
import Box from "~/components/Box";
import ReactionList from "~/components/ReactionList";
import Typography from "~/components/Typography";
import { TContent } from "models/content";
import useStore from "store";
import { StyledEmotion, StyledEmotionContainer } from "./styles";

interface IReactionInfoProps {
  content: TContent;
}

export default function ReactionInfo({ content }: IReactionInfoProps) {
  const [openReactionList, setOpenReactionList] = useState(false);
  const { account } = useStore((state) => state);

  if (!content.reactions.length && !content._count?.reactions)
    <Box mb={2} mt={1} />;

  const existMyReaction = content.reactions.find(
    (item) => item.user.accountId === account?.id
  );
  const otherPeople = content.reactions.filter(
    (item) => item.user.accountId !== account?.id
  );
  const reactions = content.reactions.map((item) => item.reaction.reaction);

  const MeAndOthers = () => {
    if (existMyReaction && otherPeople.length)
      return (
        <Box
          sx={{ cursor: "pointer" }}
          onClick={() => setOpenReactionList(true)}
        >
          <Typography variant="body2" sx={{ ml: 1 }}>
            <strong>You</strong> and {otherPeople.length} others reacted
          </Typography>
        </Box>
      );
    return null;
  };

  const OnlyOthers = () => {
    if (!existMyReaction && otherPeople.length) {
      return (
        <Typography variant="body2" sx={{ ml: 1 }}>
          {otherPeople.length}{" "}
          {otherPeople.length > 1 ? "others reacted" : "people reacted"}
        </Typography>
      );
    }
    return null;
  };

  const OnlyMe = () => {
    if (existMyReaction && !otherPeople.length) {
      return (
        <Typography variant="body2" sx={{ ml: 1 }}>
          <strong>You</strong> reacted
        </Typography>
      );
    }
    return null;
  };

  return (
    <Box mb={2} mt={1}>
      <StyledEmotionContainer>
        {[...new Set(reactions)].map((reaction) => {
          return <StyledEmotion key={reaction}>{reaction}</StyledEmotion>;
        })}

        <OnlyMe />
        <OnlyOthers />
        <MeAndOthers />
      </StyledEmotionContainer>

      <ReactionList
        content={content}
        open={openReactionList}
        setOpen={setOpenReactionList}
      />
    </Box>
  );
}
