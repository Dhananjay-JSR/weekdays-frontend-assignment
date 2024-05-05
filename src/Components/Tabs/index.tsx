import { Box, Tabs } from "@mui/material";
import TabModule from "./TabMod";
import TabsStyle from "./tab.module.css";

export default function TabsMod() {
  return (
    <>
      <Box className={TabsStyle.tabs_holder}>
        <Tabs
          aria-label="Jobs Tabs"
          centered
          className={TabsStyle.tabs_wrapper}
          textColor="secondary"
          indicatorColor="secondary"
        >
          <TabModule Content="Applied Jobs" />
          <TabModule Content="Search Jobs" BadgeCount={10} />
          <TabModule Content="Suggested Jobs" BadgeCount={15} />
        </Tabs>
      </Box>
    </>
  );
}
