import { memo } from "react";
import { format } from "date-fns";
import Divider from "~/components/Divider";
import Typography from "~/components/Typography";
import { TContent } from "models/content";

export type TPostDate = Pick<TContent, "createdAt" | "updatedAt">;

const PostDate = ({ createdAt, updatedAt }: TPostDate) => {
  return (
    <>
      <Typography
        variant="overline"
        textTransform="capitalize"
        color="text.secondary"
      >
        Vancouver, {format(new Date(createdAt), "LLL do yyyy")}
      </Typography>
      <Divider
        orientation="vertical"
        variant="middle"
        flexItem
        sx={{ borderColor: "text.secondary" }}
      />
      <Typography
        variant="overline"
        textTransform="capitalize"
        color="text.secondary"
      >
        Updated in {format(new Date(updatedAt), "LLL do yyyy")}
      </Typography>
    </>
  );
};

export default memo(PostDate);
