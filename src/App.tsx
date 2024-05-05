import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import SideBar from "./Components/Sidebar";
import MainStyle from "./App.module.css";
import TabsMod from "./Components/Tabs";
import SingleSelect from "./Components/Input/SingleSelect";
import MultiSelect from "./Components/Input/MultiSelect";
function App() {
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
          <main>
            <TabsMod />
            <div
              style={{
                display: "flex",
                padding: "10px",
                gap: "10px",
                flexWrap: "wrap",
              }}
            >
              <MultiSelect
                multiSelect
                sx={{
                  minWidth: "200px",
                }}
                checkMark
                label="Roles"
                CategoryOption={[
                  {
                    name: "ENGINEERING",
                    children: [
                      "Frontend",
                      "Backend",
                      "Fullstack",
                      "IOS",
                      "Flutter",
                      "React Native",
                      "Android",
                      "Tech Lead",
                      "Dev-Ops",
                      "Data Engineer",
                      "Data Science",
                      "Computer-Vision",
                      "NLP",
                    ].map((item) => ({
                      label: item,
                      value: item.toLowerCase(),
                    })),
                  },
                  {
                    name: "DESIGN",
                    children: [
                      "Designer",
                      "Design Manager",
                      "Graphics Magnager",
                      "Product Designer",
                    ].map((item) => ({
                      label: item,
                      value: item.toLowerCase(),
                    })),
                  },
                  {
                    name: "PRODUCT",
                    children: ["PRODUCT Manager"].map((items) => ({
                      label: items,
                      value: items.toLowerCase(),
                    })),
                  },
                  {
                    name: "OPERATIONS",
                    children: ["Operation Managers", "Founder's Office"].map(
                      (items) => ({
                        label: items,
                        value: items.toLowerCase(),
                      })
                    ),
                  },
                ]}
              />
              <SingleSelect
                label="Number of Employees"
                sx={{
                  minWidth: "200px",
                }}
                options={[
                  "1-10",
                  "11-20",
                  "21-50",
                  "51-100",
                  "101-200",
                  "201-500",
                  "500+",
                ].map((item) => ({
                  value: item,
                  label: item,
                }))}
              />
              <SingleSelect
                sx={{
                  minWidth: "200px",
                }}
                label="Experience"
                options={[
                  "1",
                  "2",
                  "3",
                  "4",
                  "5",
                  "6",
                  "7",
                  "8",
                  "9",
                  "10",
                ].map((item) => ({
                  value: item,
                  label: item,
                }))}
              />
              <SingleSelect
                sx={{
                  minWidth: "200px",
                }}
                label="Remote"
                options={[
                  {
                    label: "Remote",
                    value: "Remote",
                  },
                  {
                    label: "Hybrid",
                    value: "Hybrid",
                  },
                  {
                    label: "In-Office",
                    value: "In-Office",
                  },
                ]}
              />
              <SingleSelect
                sx={{
                  minWidth: "250px",
                }}
                label="Minimum Base Pay Salary"
                options={[
                  {
                    label: "0L",
                    value: "0L",
                  },
                  {
                    label: "10L",
                    value: "10L",
                  },
                  {
                    label: "20L",
                    value: "20L",
                  },
                  {
                    label: "30L",
                    value: "30L",
                  },
                  {
                    label: "40L",
                    value: "40L",
                  },
                  {
                    label: "50L",
                    value: "50L",
                  },
                  {
                    label: "60L",
                    value: "60L",
                  },
                  {
                    label: "70L",
                    value: "70L",
                  },
                ]}
              />
              <TextField label="Search Company Name" variant="outlined" />
            </div>
          </main>
        </section>
      </main>
    </>
  );
}

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
