import React from "react";
import { useTranslation } from "react-i18next";
import Box from "~/components/Box";
import Typography from "~/components/Typography";

function SidebarTitle() {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        mb: 3,
        mt: {
          xs: 3,
        },
      }}
    >
      <Typography variant="h3" color="success.main" fontWeight={600}>
        {t("content.title_detail")}
      </Typography>
    </Box>
  );
}

export default SidebarTitle;
