/**
 * Store Constant for all Filter Parameter
 */

export const JobTypes = [
  {
    name: "ENGINEERING",
    children: [
      "Frontend",
      "Backend",
      "Fullstack",
      // "IOS",
      // "Flutter",
      // "React Native",
      // "Android",
      // "Tech Lead",
      // "Dev-Ops",
      // "Data Engineer",
      // "Data Science",
      // "Computer-Vision",
      // "NLP",
    ].map((item) => ({
      label: item,
      value: item.toLowerCase(),
    })),
  },
  {
    name: "Mobile Development",
    children: ["IOS", "Android"].map((items) => ({
      label: items,
      value: items.toLowerCase(),
    })),
  },
  {
    name: "Operations",
    children: ["Tech Lead"].map((items) => ({
      label: items,
      value: items.toLowerCase(),
    })),
  },
  // {
  //   name: "DESIGN",
  //   children: [
  //     "Designer",
  //     "Design Manager",
  //     "Graphics Magnager",
  //     "Product Designer",
  //   ].map((item) => ({
  //     label: item,
  //     value: item.toLowerCase(),
  //   })),
  // },
  // {
  //   name: "PRODUCT",
  //   children: ["PRODUCT Manager"].map((items) => ({
  //     label: items,
  //     value: items.toLowerCase(),
  //   })),
  // },
  // {
  //   name: "OPERATIONS",
  //   children: ["Operation Managers", "Founder's Office"].map((items) => ({
  //     label: items,
  //     value: items.toLowerCase(),
  //   })),
  // },
];

export const Employee_Variants = [
  "1-10",
  "11-20",
  "21-50",
  "51-100",
  "101-200",
  "201-500",
  "500+",
];

export const Experience_Variants = [
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
];

export const Remote_Variants = ["Remote", "In-Office"];

export const Salary_Variants = [
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
];
