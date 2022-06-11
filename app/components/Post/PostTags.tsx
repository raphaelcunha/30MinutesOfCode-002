import React, { memo } from "react";
import TagIcon from "@mui/icons-material/Tag";
import { useTheme } from "@mui/material";
import Chip from "~/components/Chip";
import { TContent, TContentTags } from "models/content";
import { TTag } from "models/tag";

export type TPostTags = Pick<TContent, "tags">;

export interface IHeaderChipProps {
  tag: TTag;
}

const PostTags = ({ tags }: TPostTags) => {
  const theme = useTheme();

  const HeaderChip = ({ tag }: IHeaderChipProps) => (
    <>
      <Chip
        icon={
          <TagIcon
            sx={{
              fill: theme.palette.secondary.main,
              width: 12,
              height: 12,
            }}
          />
        }
        variant="outlined"
        label={tag.sport}
        sx={{
          minHeight: 22,
          height: "auto",
          mr: 1,
          borderColor: (prop) => prop.palette.secondary.dark,
          borderRadius: 2,
          textTransform: "capitalize",
          "& > .MuiChip-label": {
            color: (prop) => prop.palette.primary.dark,
            ...theme.typography.caption,
          },
        }}
      />
      <Chip
        icon={
          <TagIcon
            sx={{
              fill: theme.palette.secondary.main,
              width: 12,
              height: 12,
            }}
          />
        }
        variant="outlined"
        label={tag.level}
        sx={{
          minHeight: 22,
          height: "auto",
          mr: 1,
          borderColor: (prop) => prop.palette.secondary.dark,
          borderRadius: 2,
          textTransform: "capitalize",
          "& > .MuiChip-label": {
            color: (prop) => prop.palette.primary.dark,
            ...theme.typography.caption,
          },
        }}
      />
    </>
  );

  return (
    <>
      {tags.map((tag: TContentTags) => {
        return <HeaderChip key={tag.tagId} tag={tag.tag} />;
      })}
    </>
  );
};

export default memo(PostTags);
