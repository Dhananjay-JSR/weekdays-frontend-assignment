import { Typography } from "@mui/material";
import SideBar from "./Components/Sidebar";
import MainStyle from "./App.module.css";
import TabsMod from "./Components/Tabs";
import Filters from "./Components/Filters";
import JOB_Cards from "./Components/JobCard";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { useCallback, useEffect, useRef } from "react";
function App() {
  const ref = useRef() as React.MutableRefObject<HTMLDivElement>;
  const handleScroll = useCallback(() => {
    if (ref.current) {
      const { scrollTop, scrollHeight, clientHeight } = ref.current;
      if (scrollTop + clientHeight >= scrollHeight - 1) {
        alert("End of the page");
      }
    }
  }, []);
  useEffect(() => {
    const element = ref.current;
    if (element) {
      element.addEventListener("scroll", handleScroll);
      return () => {
        element.removeEventListener("scroll", handleScroll);
      };
    }
  }, [handleScroll]);
  return (
    <>
      <main className={MainStyle.main_wrapper}>
        <SideBar />
        <section
          ref={ref}
          style={{
            width: "100%",
            height: "100vh",
            overflowY: "auto",
          }}
        >
          <header
            style={{
              position: "sticky",
              top: 0,
              zIndex: 100,
              backgroundColor: "white",
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
            <Grid2
              justifyContent="center"
              gap={2}
              sx={{
                mt: 2,
              }}
              container
              spacing={2}
            >
              {API_Data.jdList.map((items) => {
                return (
                  <>
                    <JOB_Cards>
                      {(isExpanded, setExpanded) => (
                        <>
                          <JOB_Cards.Header
                            salaryCurrencyCode={items.salaryCurrencyCode}
                            minJdSalary={items.minJdSalary}
                            maxJdSalary={items.maxJdSalary}
                            location={items.location}
                            logoUrl={items.logoUrl}
                            jobRole={items.jobRole}
                            companyName={items.companyName}
                          />
                          <JOB_Cards.Body
                            isExpanded={isExpanded}
                            setIsExpanded={setExpanded}
                            jobDescription={items.jobDetailsFromCompany}
                          />
                          <JOB_Cards.Footer
                            jdLink={items.jdLink}
                            maxExp={items.maxExp}
                            minExp={items.minExp}
                          />
                        </>
                      )}
                    </JOB_Cards>
                  </>
                );
              })}
            </Grid2>

            {/*  */}
          </main>
        </section>
      </main>
    </>
  );
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const API_Data = {
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
