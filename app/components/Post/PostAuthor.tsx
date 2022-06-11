import { memo } from "react";
import Box from "~/components/Box";
import Typography from "~/components/Typography";
import { TContent } from "models/content";

export type TPostAuthor = Pick<TContent, "createdBy">;

const PostAuthor = ({ createdBy }: TPostAuthor) => {
  return (
    <Box>
      {createdBy.name && (
        <>
          <Typography
            variant="caption"
            color="primary.dark"
            fontWeight="bold"
            sx={{ mt: 0.5 }}
          >
            {createdBy.name}
          </Typography>
          <Typography variant="caption" color="text.primary" sx={{ ml: 1 }}>
            {createdBy.profession}
          </Typography>
        </>
      )}
    </Box>
  );
};
export default memo(PostAuthor);
