import { useSelector } from "react-redux";
import { RootState } from "./store";

export default function useFilterData() {
  const FilterData = useSelector((state: RootState) => state.filterData);
  const { data, currentState, error } = useSelector(
    (state: RootState) => state.apiData
  );

  const FilDat = data
    ?.filter((JobData) => {
      if (FilterData.Role.length > 0 && JobData.jobRole) {
        return FilterData.Role.includes(JobData.jobRole);
      } else {
        return true;
      }
    })
    .filter((JobData) => {
      if (FilterData.MinBaseSalary && JobData.minJdSalary != null) {
        console.log(FilterData.MinBaseSalary.split("L")[0]);
        return (
          JobData.minJdSalary >=
          parseInt(FilterData.MinBaseSalary.split("L")[0])
        );
      } else {
        return true;
      }
    })
    .filter((JobData) => {
      if (FilterData.CompanyName && JobData.companyName) {
        return JobData.companyName
          .toLowerCase()
          .includes(FilterData.CompanyName.toLowerCase());
      } else {
        return true;
      }
    })
    .filter((JobData) => {
      if (FilterData.MinExperience != "") {
        if (JobData.minExp != null) {
          return JobData.minExp >= parseInt(FilterData.MinExperience);
        } else {
          return false;
        }
      } else {
        return true;
      }
    })
    .filter((JobData) => {
      if (FilterData.Remote != "") {
        if (JobData.location) {
          if (FilterData.Remote == "Remote".toLowerCase()) {
            return JobData.location.toLowerCase().includes("remote");
          } else {
            return !JobData.location.toLowerCase().includes("remote");
          }
        } else {
          return false;
        }
      } else {
        return true;
      }
    })
    .filter((JobData) => {
      if (FilterData.Location != "") {
        if (JobData.location) {
          return JobData.location
            .toLowerCase()
            .includes(FilterData.Location.toLowerCase());
        } else {
          return false;
        }
      } else {
        return true;
      }
    });
  return {
    FilterData: FilDat,
    currentState,
    error,
  } as const;
}
