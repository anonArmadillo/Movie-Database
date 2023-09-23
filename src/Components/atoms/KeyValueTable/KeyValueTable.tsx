import { Box } from "@mui/material";
import React from "react";

interface KeyValueField {
  key: string;
  value: string;
  redirection?: () => void;
}

function KeyValueTable(props: { keyValueData: KeyValueField[] }) {
  const { keyValueData } = props;
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: ["100%", "60%"],
        margin: "20px",
      }}
    >
      {keyValueData.map((data: KeyValueField) => {
        return data.value ? (
          <Box sx={{ display: "flex", mb: "10px" }}>
            <Box sx={{ width: "30%" }}>{data.key}</Box>
            <Box
              onClick={data.redirection ? data.redirection : undefined}
              sx={{
                color: "yellow",
                width: "80%",
                cursor: data.redirection ? "pointer" : "initial",
                textDecoration: data.redirection ? "underline" : "none",
              }}
            >
              {data.value}
            </Box>
          </Box>
        ) : null;
      })}
    </Box>
  );
}

export default KeyValueTable;
