import React from "react";
import Typography from "~/components/Typography";
import { TContent } from "models/content";

export type TPostDescription = Pick<TContent, "richText">;

function PostRichText({ richText }: TPostDescription) {
  return (
    <Typography variant="body2" color="text.primary" mb={3}>
      {richText}
    </Typography>
  );
}

export default PostRichText;
