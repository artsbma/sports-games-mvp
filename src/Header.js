import React from "react";
import { Typography } from "@mui/material";
import "./Header.css";

function Header(props) {
  return (
    <header>
      <Typography sx={{ pt: 1 }} variant="h1">
        {props.title}
      </Typography>
      {!props.subtitle ? (
        ""
      ) : (
        <>
          <Typography sx={{ pt: 2 }} variant="h5">
            Which one of these works is the "most valuable player" of this
            exhibition?
          </Typography>
          <Typography sx={{ pt: 1 }} variant="subtitle2">
            One pick. No regrets.
          </Typography>
        </>
      )}
    </header>
  );
}

export default Header;
