/* eslint-disable react/require-default-props */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useState } from "react";
import produce from "immer";
import { useMutation, useQueryClient } from "react-query";
import Box from "~/components/Box";
import ReactionActions from "~/components/ReactionActions";
import ReactionButton from "~/components/ReactionButton";
import ReactionInfo from "~/components/ReactionInfo";
import { TContent } from "models/content";
import * as ContentService from "services/content";
import useStore from "store";

interface IReactionActionButtonProps {
  content: TContent;
  queryKey: string | (string | undefined)[];
}

function ReactionActionButton({
  content,
  queryKey,
}: IReactionActionButtonProps) {
  const { account } = useStore();
  const [loading, setLoading] = useState(false);
  const [showActions, setShowActions] = useState(false);
  const queryClient = useQueryClient();
  const previousContent = queryClient.getQueryData(queryKey);

  const reacted = content.reactions.find(
    (item) => item.user.accountId === account?.id
  );

  const { mutate: mutateSaveReaction } = useMutation(
    ContentService.postContentReaction,
    {
      onMutate: async (data) => {
        setLoading(true);
        // Cancel any outgoing refetches (so they don't overwrite our optimistic update)
        await queryClient.cancelQueries(queryKey);

        //  Optimistically update to the reaction
        queryClient.setQueryData(queryKey, (contents) => {
          const newContent = {
            ...content,
            _count: {
              ...content._count,
              reactions: content._count.reactions + 1,
            },
            reactions: [
              ...content.reactions,
              {
                contentId: data.contentId,
                reaction: { id: "", reaction: data.reaction },
                user: account?.user,
              },
            ],
          };

          let response: any = newContent;

          if (contents instanceof Array) {
            response = produce(contents, (draftState: any) => {
              const contentIndex = draftState.findIndex(
                (item: TContent) => item.id === data.contentId
              );
              draftState[contentIndex] = newContent;
            });
          }

          return response;
        });

        // Return a context object with the snapshotted value
        return { contents: previousContent };
      },
      onError: (err, newTodo, context: any) => {
        queryClient.setQueryData(queryKey, context.contents);
      },
      onSettled: () => {
        setShowActions(false);
        setLoading(false);
        queryClient.invalidateQueries(queryKey);
      },
    }
  );

  const { mutate: mutateRemoveReaction } = useMutation(
    ContentService.deleteContentReaction,
    {
      onMutate: async (data) => {
        // Cancel any outgoing refetches (so they don't overwrite our optimistic update)
        await queryClient.cancelQueries(queryKey);

        //  Optimistically update to the reaction
        queryClient.setQueryData(queryKey, (contents: any) => {
          const newContent = {
            ...content,
            _count: {
              ...content._count,
              reactions: content._count.reactions - 1,
            },
            reactions: content.reactions.filter(
              (item) => item.user.id === account?.id
            ),
          };

          let response: any = newContent;

          if (contents instanceof Array) {
            response = produce(contents, (draftState: any) => {
              const contentIndex = draftState.findIndex(
                (item: TContent) => item.id === data.contentId
              );
              draftState[contentIndex] = newContent;
            });
          }

          return response;
        });

        // Return a context object with the snapshotted value
        return { contents: previousContent };
      },
      onError: (err, newTodo, context: any) => {
        queryClient.setQueryData("getContentForMe", context.content);
      },
      onSettled: () => {
        setShowActions(false);
        queryClient.invalidateQueries("getContentForMe");
      },
    }
  );

  const handleClick = useCallback(() => {
    if (reacted && reacted.reactionId) {
      mutateRemoveReaction({
        contentId: content.id,
        reactionId: reacted.reactionId,
      });
    } else {
      setShowActions(true);
    }
  }, [content.id, mutateRemoveReaction, reacted]);

  const handleSelect = (key: string, value: string) => {
    setShowActions(false);
    mutateSaveReaction({ contentId: content.id, reaction: value });
  };

  return (
    <Box>
      <ReactionInfo content={content} />
      <ReactionActions
        open={showActions}
        setOpen={setShowActions}
        onSelect={handleSelect}
      />
      <ReactionButton
        onClick={handleClick}
        reaction={reacted?.reaction}
        loading={loading}
      />
    </Box>
  );
}

export default ReactionActionButton;
