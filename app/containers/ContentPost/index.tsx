import { memo } from "react";
import { useTheme } from "@mui/material";
import { Link as LinkRouter } from "react-router-dom";
import Box from "~/components/Box";
import Link from "~/components/Link";
import {
  PostAuthor,
  PostDescription,
  PostImage,
  PostTags,
  PostVideo,
  PostTitle,
} from "~/components/Post";
import Stack from "~/components/Stack";
import ContentReactions from "containers/ContentReactions";
import { TContent } from "models/content";
import { EFileType } from "models/file";

type TContentPostProps = {
  content: TContent;
  queryKey: string;
};

const ContentPost = ({ content, queryKey }: TContentPostProps) => {
  const theme = useTheme();

  const type = content.file.fileType;

  const PostMedia = () => {
    const video = (
      <PostVideo title={content.title} thumbnail={content.thumbnail} />
    );
    const image = (
      <PostImage title={content.title} thumbnail={content.thumbnail} />
    );

    return type === EFileType.Video ? video : image;
  };

  const PostHeader = () => {
    return (
      <>
        <PostMedia />
        <Stack direction="row" spacing={1} m={2}>
          <PostTags tags={content.tags} />
        </Stack>
        <Box mt={2} px={2}>
          <PostTitle title={content.title} />
        </Box>
      </>
    );
  };

  const PostContent = () => (
    <Box sx={{ flex: 1, px: 2, mt: 1, mb: 2 }}>
      <PostAuthor createdBy={content.createdBy} />
      <PostDescription description={content.description} />
    </Box>
  );

  return (
    <Box
      sx={{
        bgcolor: theme.palette.primary.contrastText,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        boxShadow: theme.shadows[1],
        borderRadius: 1,
        marginBottom: {
          xs: 1,
          sm: 2,
        },
      }}
    >
      <Link
        component={LinkRouter}
        to={`/content/${content.id}`}
        sx={{ textDecoration: "none" }}
      >
        <PostHeader />
        <PostContent />
      </Link>
      <Box px={2} mb={2}>
        <ContentReactions content={content} queryKey={queryKey} />
      </Box>
    </Box>
  );
};

export default memo(ContentPost);
