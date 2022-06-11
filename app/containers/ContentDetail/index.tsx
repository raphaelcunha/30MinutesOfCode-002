/* eslint-disable react/require-default-props */
import { memo } from "react";
import { useMediaQuery, useTheme } from "@mui/material";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Box from "~/components/Box";
import Divider from "~/components/Divider";
import {
  PostAuthor,
  PostDescription,
  PostImageDetail,
  PostTags,
  PostTitle,
  PostRichText,
  PostDate,
  PostShare,
  PostViews,
} from "~/components/Post";
import Skeleton from "~/components/Skeleton";
import Stack from "~/components/Stack";
import VimeoEmbed from "~/components/VimeoEmbed";
import ContentReactions from "containers/ContentReactions";
import { EFileType } from "models/file";
import { getContentId } from "services/content";
import { StyledContainer } from "./styles";

const ContentDetail = () => {
  const theme = useTheme();
  const { id } = useParams<{ id: string }>();
  const isDownMd = useMediaQuery(theme.breakpoints.down("md"));

  const queryKey = ["getContentId", id];
  const { data: content } = useQuery(queryKey, () =>
    id ? getContentId(id) : undefined
  );

  const type = content && content.file.fileType;

  if (!content) {
    return (
      <StyledContainer>
        <Skeleton variant="rectangular" width="100%" height={300} />
        <Stack direction="row" spacing={1} mt={3} mb={2}>
          <Skeleton variant="rectangular" width={58} height={22} />
          <Skeleton variant="rectangular" width={58} height={22} />
        </Stack>
        <Skeleton
          variant="rectangular"
          width="100%"
          height={29}
          sx={{ mb: 2 }}
        />
        <Skeleton
          variant="rectangular"
          width="100%"
          height={29}
          sx={{ mb: 3 }}
        />
        <Skeleton
          variant="rectangular"
          width="100%"
          height={29}
          sx={{ mb: 3 }}
        />
      </StyledContainer>
    );
  }

  const PostMedia = () => {
    const video = <VimeoEmbed url={content.file.fileUrl} />;
    const image = (
      <PostImageDetail title={content.title} thumbnail={content.thumbnail} />
    );
    return type === EFileType.Video ? video : image;
  };

  return (
    <>
      {isDownMd && <Box mr={2}>{PostMedia()}</Box>}

      <StyledContainer>
        {!isDownMd && <Box mb={2}>{PostMedia()}</Box>}

        <PostTags tags={content.tags} />

        <PostTitle title={content.title} />

        <PostDescription description={content.description} />

        <Box pt={2}>
          <PostAuthor createdBy={content.createdBy} />
        </Box>

        <Stack
          direction="row"
          spacing={1}
          py={1}
          maxHeight={12}
          alignItems="center"
        >
          <PostDate
            createdAt={content.createdAt}
            updatedAt={content.updatedAt}
          />
        </Stack>

        <PostViews views={450} />

        <Divider sx={{ borderColor: "secondary.main", my: 2 }} />

        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="flex-end"
        >
          <ContentReactions content={content} queryKey={queryKey} />
          <PostShare />
        </Box>

        <Box my={4}>
          <PostRichText richText={content.richText} />
        </Box>
      </StyledContainer>
    </>
  );
};

export default memo(ContentDetail);
