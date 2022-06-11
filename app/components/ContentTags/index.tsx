/* eslint-disable react/require-default-props */
import TagIcon from "@mui/icons-material/Tag";
import { useTheme } from "@mui/material";
import Typography from "~/components/Typography";
import { ButtonTag } from "./styles";

type TContentTagsProps = {
  label: string;
  fontColor: string;
  borderColor: string;
  hashtagColor: string;
};

const ContentTags = ({
  label,
  fontColor,
  borderColor,
  hashtagColor,
}: TContentTagsProps) => {
  const theme = useTheme();

  return (
    <ButtonTag
      startIcon={<TagIcon sx={{ fill: hashtagColor, width: 16, height: 16 }} />}
      variant="outlined"
      sx={{
        marginRight: 1,
        minHeight: 22,
        height: "auto",
        borderColor,
        borderRadius: 2,
        textTransform: "capitalize",
        "& > .MuiChip-label": {
          color: fontColor,
          ...theme.typography.caption,
        },
      }}
    >
      <Typography
        color={fontColor}
        fontSize="12px"
        lineHeight="18px"
        fontWeight={500}
      >
        {label}
      </Typography>
    </ButtonTag>
  );
};

export default ContentTags;
