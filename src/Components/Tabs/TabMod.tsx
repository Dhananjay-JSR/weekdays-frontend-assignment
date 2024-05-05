import { Tab, Badge, Typography } from "@mui/material";
import TabStyle from "./tab.module.css";
export default function TabModule({
  BadgeCount,
  Content,
}: {
  BadgeCount?: number;
  Content: string;
}) {
  return (
    <Tab
      value={Content}
      label={
        <>
          {BadgeCount ? (
            <Badge
              badgeContent={BadgeCount}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              color="primary"
            >
              <Typography className={TabStyle.text_style} color={"black"}>
                {Content}
              </Typography>
            </Badge>
          ) : (
            <Typography className={TabStyle.text_style} color={"black"}>
              {Content}
            </Typography>
          )}
        </>
      }
    />
  );
}
