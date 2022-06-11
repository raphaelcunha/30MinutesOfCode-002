import TagIcon from "@mui/icons-material/Tag";
import { CardHeader, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useQuery } from "react-query";
import { IconAdd } from "assets/icon";
import { Medal } from "assets/images";
import Avatar from "~/components/Avatar";
import Box from "~/components/Box";
import Button from "~/components/Button";
import Card from "~/components/Card";
import CardContent from "~/components/CardContent";
import Chip from "~/components/Chip";
import Typography from "~/components/Typography";
import { Tags } from "services/tags";
import useStore from "store";

export default function UserCard() {
  const { account } = useStore();
  const firstLetters = account?.user.name.charAt(0);

  const { data } = useQuery("getTags", Tags);

  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        boxShadow: theme.shadows[1],
        borderRadius: 0.5,
      }}
    >
      <CardHeader
        sx={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          background: "linear-gradient(180deg, #D7CFE6 30%, white 10%)",
        }}
        avatar={
          <Avatar
            sx={{
              bgcolor: "green.primary",
              marginBottom: "8px",
              height: "64px",
              width: "64px",
              marginLeft: "16px",
            }}
            aria-label="recipe"
          >
            <Typography
              color="#FBF5ED"
              fontSize="32px"
              lineHeight="48px"
              fontWeight="500"
            >
              {firstLetters}
            </Typography>
          </Avatar>
        }
        title={
          <Typography
            variant="h3"
            color="primary.main"
            lineHeight="120%"
            fontWeight="600"
            marginBottom="4px"
          >
            {account?.user.name}
          </Typography>
        }
        subheader={
          <Typography variant="body2" color="text.secondary">
            {account?.email}
          </Typography>
        }
      />
      <CardContent sx={{ flex: 1 }}>
        <Box p={2} sx={{ backgroundColor: "#F5F4F7", borderRadius: "4px" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
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
              label={account?.user.tags[0].tag.sport}
              sx={{
                minHeight: 22,
                height: "auto",
                borderColor: (prop) => prop.palette.secondary.dark,
                borderRadius: 2,
                textTransform: "capitalize",
                "& > .MuiChip-label": {
                  color: (prop) => prop.palette.primary.dark,
                  ...theme.typography.caption,
                },
              }}
            />
            <Medal />
          </Box>
          <Typography
            variant="body2"
            color="primary.main"
            fontSize="12px"
            lineHeight="20px"
            margin="8px 0"
            sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
          >
            {t("~/components.skill_level")}
            {account?.user.tags[0].tag.level.replace(/^\w/, (c) =>
              c.toUpperCase()
            )}
          </Typography>
          <Typography
            variant="body2"
            color="text.primary"
            fontSize="10px"
            lineHeight="15px"
            margin="6px 0"
          >
            {t(
              `personalize.${
                data?.find(
                  (item) => item.level === account?.user.tags[0].tag.level
                )?.level
              }`
            )}
          </Typography>
        </Box>
        <Box mt={1}>
          <Button
            startIcon={<IconAdd />}
            variant="contained"
            fullWidth
            sx={{
              textTransform: "none",
              backgroundColor: "#CEBFED",
              ":hover": {
                backgroundColor: "#D7CFE6",
              },
            }}
          >
            <Typography
              fontSize="14px"
              fontWeight="500"
              lineHeight="21px"
              color="purple.primary"
            >
              Share your moment
            </Typography>
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}
