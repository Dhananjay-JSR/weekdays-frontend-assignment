import { Theme, ThemeProvider } from "@emotion/react";
import {
  ExpandCircleDownOutlined,
  ElectricBoltTwoTone,
} from "@mui/icons-material";
import {
  Stack,
  Box,
  Typography,
  IconButton,
  SxProps,
  createTheme,
  Button,
} from "@mui/material";
import React, { useEffect } from "react";
import JobCardStyles from "./style.module.css";

export default function JOB_Cards({
  children,
}: {
  children: (
    isExpanded: boolean,
    setExpanded: React.Dispatch<React.SetStateAction<boolean>>
  ) => React.ReactNode;
}) {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const Ref = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const HandleClickOutside = (e: MouseEvent) => {
      if (Ref.current && !Ref.current.contains(e.target as Node)) {
        setIsExpanded(false);
      }
    };
    document.addEventListener("mousedown", HandleClickOutside);
    return () => {
      document.removeEventListener("mousedown", HandleClickOutside);
    };
  }, []);
  return (
    <Stack ref={Ref} gap={1.3} className={JobCardStyles.wrapper}>
      {children(isExpanded, setIsExpanded)}
    </Stack>
  );
}

function BodyRenderer({
  isExpanded,
  setIsExpanded,
  jobDescription,
}: {
  isExpanded: boolean;
  setIsExpanded: React.Dispatch<React.SetStateAction<boolean>>;
  jobDescription: string | null;
}) {
  return (
    <>
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

          {jobDescription}
          {!isExpanded && (
            <Box className={JobCardStyles.body_description_fader}></Box>
          )}
        </Typography>
      </Box>
    </>
  );
}

function BottomRenderer({
  jdLink,
  maxExp,
  minExp,
}: {
  minExp: number | null;
  maxExp: number | null;
  jdLink: string;
}) {
  return (
    <>
      <Box
        mt={"auto"}
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {minExp != null && (
          <Box>
            <Typography color={"#8b8b8b"} fontWeight={500}>
              Min Experience
            </Typography>
            <Typography>{minExp} Years</Typography>
          </Box>
        )}
        {maxExp != null && (
          <Box>
            <Typography color={"#8b8b8b"} fontWeight={500}>
              Max Experience
            </Typography>
            <Typography>{maxExp} years</Typography>
          </Box>
        )}
      </Box>
      <Stack gap={1}>
        <CustomBtn
          onClick={() => {
            window.open(jdLink, "_blank");
          }}
          color="#54efc3"
        >
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
              className={JobCardStyles.blur_img}
            />
            <img
              src="https://i.pravatar.cc/150?u=a04saddsadsa"
              className={JobCardStyles.blur_img}
            />
            Unlock referral asks
          </Stack>
        </CustomBtn>
      </Stack>
    </>
  );
}

function HeaderRenderer({
  logoUrl,
  companyName,
  jobRole,
  location,
  maxJdSalary,
  minJdSalary,
  salaryCurrencyCode,
}: {
  logoUrl: string | null;
  companyName: string | null;
  jobRole: string | null;
  location: string | null;
  salaryCurrencyCode: string | null;
  minJdSalary: number | null;
  maxJdSalary: number | null;
}) {
  return (
    <>
      <Box className={JobCardStyles.Head_Wrapper}>
        <Typography fontWeight={500} fontSize={"9px"}>
          ⏳ Posted 5 days ago
        </Typography>
      </Box>
      <Box className={JobCardStyles.Head_wrap}>
        {logoUrl != null && (
          <img
            style={{
              width: "25px",
              height: "2.5rem",
            }}
            src={logoUrl}
          />
        )}

        <div>
          <Typography
            color={"#8b8b8b"}
            fontSize={"13px"}
            fontWeight={600}
            letterSpacing={"1px"}
            variant="h3"
            gutterBottom
          >
            {companyName != null ? companyName : "Company Name"}
          </Typography>
          <Typography
            variant="h2"
            fontWeight={400}
            fontSize={"14px"}
            lineHeight={"1.5"}
            gutterBottom
          >
            {jobRole != null ? jobRole : "Job Role"}
          </Typography>
          <Typography
            variant="h2"
            fontWeight={500}
            fontSize={"11px"}
            lineHeight={"1.5"}
          >
            {location != null ? location : "Location"}
          </Typography>
        </div>
      </Box>
      <Typography color={"#4d596a"}>
        Estimated Salary: {minJdSalary != null ? "min: " + minJdSalary : ""}{" "}
        {maxJdSalary != null ? "max: " + maxJdSalary : ""}
        {salaryCurrencyCode != null ? " " + salaryCurrencyCode : ""} LPA✅
      </Typography>
    </>
  );
}

function CustomBtn({
  children,
  color,
  onClick,
  sx,
}: {
  onClick?: () => void;
  children: React.ReactNode;
  color: string;
  sx?: SxProps<Theme>;
}) {
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
        <Button onClick={onClick} sx={sx} variant="contained">
          {children}
        </Button>
      </ThemeProvider>
    </>
  );
}

JOB_Cards.Header = HeaderRenderer;
JOB_Cards.Body = BodyRenderer;
JOB_Cards.Footer = BottomRenderer;
