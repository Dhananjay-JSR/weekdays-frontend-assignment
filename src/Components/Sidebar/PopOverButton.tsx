import { Button, Tooltip } from "@mui/material";
import React from "react";

export const PopOverButton = ({
  PopOverText,
  children,
}: {
  children: React.ReactNode;
  PopOverText: string;
}) => {
  return (
    <Tooltip title={PopOverText} placement="left-end">
      <Button
        style={{
          color: "black",
        }}
      >
        {children}
      </Button>
    </Tooltip>
  );
};
