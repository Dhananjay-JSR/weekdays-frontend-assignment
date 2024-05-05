import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  SxProps,
  TextField,
  Theme,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import SideBar from "./Components/Sidebar";
import MainStyle from "./App.module.css";
import TabsMod from "./Components/Tabs";
import SingleSelect from "./Components/Input/SingleSelect";
import MultiSelect from "./Components/Input/MultiSelect";
import Filters from "./Components/Filters";
import {
  ElectricBoltOutlined,
  ElectricBoltTwoTone,
  ExpandCircleDown,
  ExpandCircleDownOutlined,
  ThunderstormOutlined,
} from "@mui/icons-material";
import React from "react";
import { lightGreen, blueGrey, pink } from "@mui/material/colors";
function App() {
  const [isExpanded, setIsExpanded] = React.useState(false);
  return (
    <>
      <main className={MainStyle.main_wrapper}>
        <SideBar />
        <section
          style={{
            width: "100%",
          }}
        >
          <header
            style={{
              padding: "10px",
              boxShadow: "0 2px 4px 0 rgba(0,0,0,0.1)",
              height: "50px",
            }}
          >
            <nav>
              <Typography fontWeight={"medium"}>👋 Dhananjay</Typography>
            </nav>
          </header>
          <main className={MainStyle.body_holder}>
            <TabsMod />
            <Filters />
            <Stack
              gap={1.3}
              style={{
                width: "350px",
                backgroundColor: "white",
                borderRadius: "20px",
                paddingTop: "20px",
                paddingBottom: "20px",
                paddingLeft: "30px",
                paddingRight: "30px",
                boxShadow: "#00000040 0px 1px 4px 0px",
              }}
            >
              <Box
                sx={{
                  width: "fit-content",
                  boxShadow: "#0606060d 0px 2px 6px 0px",
                  padding: "4px 6px",
                  borderRadius: "10px",
                  border: "1px solid #e6e6e6",
                }}
              >
                <Typography fontSize={"9px"}>⏳ Posted 5 days ago</Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  gap: "10px",
                }}
              >
                <img
                  style={{
                    width: "25px",
                    height: "2.5rem",
                  }}
                  src="https://logo.clearbit.com/dropbox.com"
                />
                <div>
                  <Typography
                    color={"#8b8b8b"}
                    fontSize={"13px"}
                    fontWeight={600}
                    letterSpacing={"1px"}
                    variant="h3"
                    gutterBottom
                  >
                    Ema
                  </Typography>
                  <Typography
                    variant="h2"
                    fontWeight={400}
                    fontSize={"14px"}
                    lineHeight={"1.5"}
                    gutterBottom
                  >
                    Software Productivity Engineer
                  </Typography>
                  <Typography
                    variant="h2"
                    fontWeight={500}
                    fontSize={"11px"}
                    lineHeight={"1.5"}
                  >
                    Bangalore
                  </Typography>
                </div>
              </Box>

              <Typography color={"#4d596a"}>
                Estimated Salary: ₹30 - 50LPA✅
              </Typography>
              <Box>
                <Typography fontWeight={500}>Job Description:</Typography>
                <Typography
                  sx={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "-webkit-box",
                    WebkitLineClamp: isExpanded ? 10000 : 8,
                    WebkitBoxOrient: "vertical",
                    position: "relative",
                    transition: "all 0.5s",
                  }}
                >
                  <IconButton
                    onClick={() => setIsExpanded(!isExpanded)}
                    sx={{
                      position: "absolute",
                      bottom: 0,
                      right: "50%",
                      transform: `translateX(50%) `,
                      zIndex: 1,
                    }}
                    color="primary"
                    aria-label="Expand"
                  >
                    <ExpandCircleDownOutlined
                      sx={{
                        rotate: isExpanded ? "180deg" : "0deg",
                      }}
                    />
                  </IconButton>

                  {API_Data.jdList[0].jobDetailsFromCompany}
                  {!isExpanded && (
                    <Box
                      sx={{
                        backgroundImage:
                          "linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255, 1) 90%)",
                        width: "100%",
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        height: "70px",
                      }}
                    ></Box>
                  )}
                </Typography>
              </Box>
              <Box>
                <Typography color={"#8b8b8b"} fontWeight={500}>
                  Minimum Experience
                </Typography>
                <Typography>8 years</Typography>
              </Box>
              <Stack gap={1}>
                <CustomBtn color="#54efc3">
                  <ElectricBoltTwoTone
                    sx={{
                      color: "#f9c216",
                    }}
                  />
                  Easy Apply
                </CustomBtn>
                <CustomBtn color="#4943da">
                  <Stack direction={"row"} gap={1}>
                    <img
                      src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                      style={{
                        borderRadius: "500%",
                        filter: "blur(1px)",
                        width: "20px",
                        height: "20px",
                      }}
                    />
                    <img
                      src="https://i.pravatar.cc/150?u=a04saddsadsa"
                      style={{
                        borderRadius: "500%",
                        filter: "blur(1px)",
                        width: "20px",
                        height: "20px",
                      }}
                    />
                    Unlock referral asks
                  </Stack>
                </CustomBtn>
              </Stack>
            </Stack>
          </main>
        </section>
      </main>
    </>
  );
}

const CustomBtn = ({
  children,
  color,
  sx,
}: {
  children: React.ReactNode;
  color: string;
  sx?: SxProps<Theme>;
}) => {
  const theme = createTheme({
    palette: {
      primary: {
        main: color,
      },
    },
  });
  return (
    <>
      <ThemeProvider theme={theme}>
        <Button sx={sx} variant="contained">
          {children}
        </Button>
      </ThemeProvider>
    </>
  );
};

const InfoViewer = ({
  data,
}: {
  data: {
    title: string;
    children: {
      title: string;
      description: string;
    }[];
  }[];
}) => {
  return (
    <Box
      sx={{
        height: "240px",
        backgroundColor: "",
        overflowY: "hidden",
        position: "relative",
      }}
    >
      <Box
        sx={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255, 1) 90%)",
          width: "100%",
          position: "absolute",
          bottom: 0,
          left: 0,
          height: "50px",
        }}
      ></Box>
      {data.map((item) => {
        return (
          <Box>
            <Typography fontWeight={500}>{item.title}</Typography>
            {item.children.map((child) => {
              return (
                <Box>
                  <Typography fontWeight={600}>{child.title}</Typography>
                  <Typography>{child.description}</Typography>
                </Box>
              );
            })}
          </Box>
        );
      })}
    </Box>
  );
};

const AboutTag = [
  {
    title: "About Company:",
    children: [
      {
        title: "About US",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam minus quam eum numquam dolor ducimus eligendi iusto quos minima officia non, aut totam, beatae saepe at aspernatur quis. Quia, minima.",
      },
      {
        title: "Founder/Recruiter profiles",
        description: "Suchit Dubey",
      },
    ],
  },
  {
    title: "About Role:",
    children: [
      {
        title: "Overview",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, vitae distinctio dolorem voluptatem suscipit exercitationem iste porro! Aut voluptate quisquam, eius dolor assumenda fuga ullam molestiae nemo, architecto facilis sequi!",
      },
    ],
  },
];

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const API_Data = {
  jdList: [
    {
      jdUid: "cfff35ac-053c-11ef-83d3-06301d0a7178-92010",
      jdLink: "https://weekday.works",
      jobDetailsFromCompany:
        "This is a sample job and you must have displayed it to understand that its not just some random lorem ipsum text but something which was manually written. Oh well, if random text is what you were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and now in this assignment.",
      maxJdSalary: 61,
      minJdSalary: null,
      salaryCurrencyCode: "USD",
      location: "delhi ncr",
      minExp: 3,
      maxExp: 6,
      jobRole: "frontend",
      companyName: "Dropbox",
      logoUrl: "https://logo.clearbit.com/dropbox.com",
    },
    {
      jdUid: "cfff35ba-053c-11ef-83d3-06301d0a7178-92012",
      jdLink: "https://weekday.works",
      jobDetailsFromCompany:
        "This is a sample job and you must have displayed it to understand that its not just some random lorem ipsum text but something which was manually written. Oh well, if random text is what you were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and now in this assignment.",
      maxJdSalary: 103,
      minJdSalary: 100,
      salaryCurrencyCode: "USD",
      location: "mumbai",
      minExp: null,
      maxExp: null,
      jobRole: "ios",
      companyName: "LG",
      logoUrl: "https://logo.clearbit.com/lg.com",
    },
    {
      jdUid: "cfff35d4-053c-11ef-83d3-06301d0a7178-92016",
      jdLink: "https://weekday.works",
      jobDetailsFromCompany:
        "This is a sample job and you must have displayed it to understand that its not just some random lorem ipsum text but something which was manually written. Oh well, if random text is what you were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and now in this assignment.",
      maxJdSalary: 28,
      minJdSalary: 26,
      salaryCurrencyCode: "USD",
      location: "remote",
      minExp: 2,
      maxExp: 11,
      jobRole: "android",
      companyName: "Sony",
      logoUrl: "https://logo.clearbit.com/sony.com",
    },
    {
      jdUid: "cfff35e1-053c-11ef-83d3-06301d0a7178-92018",
      jdLink: "https://weekday.works",
      jobDetailsFromCompany:
        "This is a sample job and you must have displayed it to understand that its not just some random lorem ipsum text but something which was manually written. Oh well, if random text is what you were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and now in this assignment.",
      maxJdSalary: 45,
      minJdSalary: 35,
      salaryCurrencyCode: "USD",
      location: "chennai",
      minExp: 5,
      maxExp: 6,
      jobRole: "tech lead",
      companyName: "Adobe Systems",
      logoUrl: "https://logo.clearbit.com/adobe.com",
    },
    {
      jdUid: "cfff35ed-053c-11ef-83d3-06301d0a7178-92020",
      jdLink: "https://weekday.works",
      jobDetailsFromCompany:
        "This is a sample job and you must have displayed it to understand that its not just some random lorem ipsum text but something which was manually written. Oh well, if random text is what you were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and now in this assignment.",
      maxJdSalary: 48,
      minJdSalary: 26,
      salaryCurrencyCode: "USD",
      location: "delhi ncr",
      minExp: 1,
      maxExp: 8,
      jobRole: "frontend",
      companyName: "HP",
      logoUrl: "https://logo.clearbit.com/hp.com",
    },
    {
      jdUid: "cfff35fb-053c-11ef-83d3-06301d0a7178-92022",
      jdLink: "https://weekday.works",
      jobDetailsFromCompany:
        "This is a sample job and you must have displayed it to understand that its not just some random lorem ipsum text but something which was manually written. Oh well, if random text is what you were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and now in this assignment.",
      maxJdSalary: 19,
      minJdSalary: 15,
      salaryCurrencyCode: "USD",
      location: "mumbai",
      minExp: 8,
      maxExp: 9,
      jobRole: "ios",
      companyName: "eBay",
      logoUrl: "https://logo.clearbit.com/ebay.com",
    },
    {
      jdUid: "cfff3608-053c-11ef-83d3-06301d0a7178-92024",
      jdLink: "https://weekday.works",
      jobDetailsFromCompany:
        "This is a sample job and you must have displayed it to understand that its not just some random lorem ipsum text but something which was manually written. Oh well, if random text is what you were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and now in this assignment.",
      maxJdSalary: 78,
      minJdSalary: 64,
      salaryCurrencyCode: "USD",
      location: "bangalore",
      minExp: 7,
      maxExp: 15,
      jobRole: "backend",
      companyName: "Tencent",
      logoUrl: "https://logo.clearbit.com/tencent.com",
    },
    {
      jdUid: "cfff3614-053c-11ef-83d3-06301d0a7178-92026",
      jdLink: "https://weekday.works",
      jobDetailsFromCompany:
        "This is a sample job and you must have displayed it to understand that its not just some random lorem ipsum text but something which was manually written. Oh well, if random text is what you were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and now in this assignment.",
      maxJdSalary: 5,
      minJdSalary: 3,
      salaryCurrencyCode: "USD",
      location: "remote",
      minExp: 3,
      maxExp: 12,
      jobRole: "android",
      companyName: "Apple",
      logoUrl: "https://logo.clearbit.com/apple.com",
    },
    {
      jdUid: "cfff3621-053c-11ef-83d3-06301d0a7178-92028",
      jdLink: "https://weekday.works",
      jobDetailsFromCompany:
        "This is a sample job and you must have displayed it to understand that its not just some random lorem ipsum text but something which was manually written. Oh well, if random text is what you were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and now in this assignment.",
      maxJdSalary: 33,
      minJdSalary: 23,
      salaryCurrencyCode: "USD",
      location: "chennai",
      minExp: 1,
      maxExp: 5,
      jobRole: "tech lead",
      companyName: "Asus",
      logoUrl: "https://logo.clearbit.com/asus.com",
    },
    {
      jdUid: "cfff362e-053c-11ef-83d3-06301d0a7178-92030",
      jdLink: "https://weekday.works",
      jobDetailsFromCompany:
        "This is a sample job and you must have displayed it to understand that its not just some random lorem ipsum text but something which was manually written. Oh well, if random text is what you were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and now in this assignment.",
      maxJdSalary: 83,
      minJdSalary: 61,
      salaryCurrencyCode: "USD",
      location: "delhi ncr",
      minExp: 6,
      maxExp: 11,
      jobRole: "frontend",
      companyName: "Intel Corporation",
      logoUrl: "https://logo.clearbit.com/intel.com",
    },
  ],
  totalCount: 947,
};

export default App;
