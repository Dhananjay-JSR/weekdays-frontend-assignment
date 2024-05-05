import {
  BoyRounded,
  PersonPin,
  Search,
  CurrencyRupee,
  AddAPhoto,
  ThumbUp,
  Share,
  ListAlt,
} from "@mui/icons-material";
import { Divider, Typography, Avatar } from "@mui/material";
import { PopOverButton } from "./PopOverButton";
import styleModule from "./style.module.css";

export default function SideBar() {
  return (
    <>
      <section className={styleModule.base_sidebar}>
        <div>
          <div className={styleModule.side_spacer}>
            <BoyRounded fontSize="large" className={styleModule.logo} />
            <Divider />

            <Typography className={styleModule.textStyle}>GET JOBS</Typography>
            <PopOverButton PopOverText="My Applied Jobs">
              <PersonPin />
            </PopOverButton>
            <PopOverButton PopOverText="Search Jobs">
              <Search />
            </PopOverButton>
            <PopOverButton PopOverText="Search Salary">
              <CurrencyRupee />
            </PopOverButton>
            <PopOverButton PopOverText="Ask for Referral">
              <AddAPhoto />
            </PopOverButton>
            <Divider />
            <Typography className={styleModule.textStyle}>REFER</Typography>
            <PopOverButton PopOverText="Recommed From Shortlist">
              <ThumbUp />
            </PopOverButton>
            <PopOverButton PopOverText="Recommened to specific company">
              <ListAlt />
            </PopOverButton>
            <PopOverButton PopOverText="Share this Extension">
              <Share />
            </PopOverButton>
          </div>
        </div>
        <div className={styleModule.profile_avatar}>
          <Avatar src="https://i.pravatar.cc/300" />
        </div>
      </section>
    </>
  );
}
