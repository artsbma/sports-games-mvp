import React from "react";
import ResultsTable from "./ResultsTable";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import Header from "./Header";

export default function Results(props) {
  const { done } = props;

  return (
    <>
      <Header title="Results" subtitle={false} />
      <ResultsTable sx={{ mb: 4 }} works={props.works} />
      <Button
        style={{ backgroundColor: "white", color: "black", fontSize: "1.5em" }}
        sx={{ mt: 7 }}
        onClick={done}
        variant="contained"
        size="large"
      >
        Start Over
      </Button>
    </>
  );
}
