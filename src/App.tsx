import { Alert, Box, CircularProgress, Typography } from "@mui/material";
import SideBar from "./Components/Sidebar";
import MainStyle from "./App.module.css";
import TabsMod from "./Components/Tabs";
import Filters from "./Components/Filters";
import JOB_Cards from "./Components/JobCard";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { useCallback, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { fetchAPIData } from "./store/DataSlice";
import { AppDispatch } from "./store/store";
import useFilterData from "./store/useData";
function App() {
  const dispatch = useDispatch<AppDispatch>();
  const { FilterData, currentState, error } = useFilterData();
  let timeout: NodeJS.Timeout;
  const ref = useRef() as React.MutableRefObject<HTMLDivElement>;
  // Handle Scroll
  const handleScroll = useCallback(async () => {
    if (ref.current) {
      const { scrollTop, scrollHeight, clientHeight } = ref.current;
      if (scrollTop + clientHeight > scrollHeight - 1) {
        // if the Scrollbar reaches the Bottom , FetchData
        dispatch(fetchAPIData());
      }
    }
  }, []);
  // Debounce the Effect , the different browsers treat Scroll Listener different and may trigger double event
  // One for Scroll Down and One Scroll Up in Same Reference  , this function adds a delay to that
  const debouncedHandleScroll = useCallback(() => {
    clearTimeout(timeout);
    timeout = setTimeout(handleScroll, 500);
  }, [handleScroll]);

  // Send Response for FirstTime
  useEffect(() => {
    dispatch(fetchAPIData());
  }, []);
  useEffect(() => {
    // Add Debounce Event
    const element = ref.current;
    if (element) {
      element.addEventListener("scroll", debouncedHandleScroll);
      return () => {
        element.removeEventListener("scroll", debouncedHandleScroll);
      };
    }
  }, []);
  return (
    <>
      <main className={MainStyle.main_wrapper}>
        <SideBar />
        <section ref={ref} className={MainStyle.main_section}>
          <header className={MainStyle.sticky_header}>
            <nav>
              <Typography fontWeight={"medium"}>👋 Dhananjay</Typography>
            </nav>
          </header>
          <main
            style={{
              marginBottom: "50px",
            }}
            className={MainStyle.body_holder}
          >
            <TabsMod />
            <Filters />
            {currentState == "ERROR" && <Alert severity="error">{error}</Alert>}
            <Grid2
              justifyContent="center"
              gap={2}
              sx={{
                mt: 2,
              }}
              container
              spacing={2}
            >
              {FilterData.length == 0
                ? currentState == "SUCCESS" && (
                    <Alert severity="warning">
                      No Data Found with Selected Filter
                    </Alert>
                  )
                : FilterData.map((items) => {
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
            {currentState == "LOADING" && (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  mt: 2,
                }}
              >
                <Typography>Loading more...</Typography>
                <CircularProgress />
              </Box>
            )}
          </main>
        </section>
      </main>
    </>
  );
}

export default App;
