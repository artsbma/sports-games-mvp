import React from "react";
import Grid from "@mui/material/Grid";
import Card from '@mui/material/Card';
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import { Typography } from "@mui/material";

export default function Loading() {
  return (
    <>
    <div className="App">
    
     <Typography sx={{ pt: 1}} variant="h1">The Real MVP</Typography>
            <Typography sx={{ pt: 2 }} variant="h5">
              Which one of these works is the "most valuable player" of this
              exhibition?
            </Typography>
            <Typography sx={{ pt: 1 }} variant="subtitle2">
              One pick. No regrets.
            </Typography>
    <Grid container wrap="wrap" spacing={2} columns={12} sx={{ pl: 1, pt: 10 }} style={{ padding: "32px 0 0 17px", margin: 0}}>
      {Array.from(new Array(12)).map((item, index) => (
         <Grid key={`grid-item-${index}`} item xs={3} sx={{ mb: 3 }}>
         <Card key={`card-${index}`} style={{ height: 273, width: 188, paddingTop: 20, boxSizing: "border-box" }}>    
         <Skeleton
           style={{ marginBottom: 10, margin:"0 auto"}}
           variant="rectangular"
           animation="wave"
           width={145}
           height={150}
         />
         <Skeleton
           animation="wave"
           height={20}
           width={135}
           style={{ margin: "10px auto 0px auto" }}
         />
          <Skeleton
           animation="wave"
           height={20}
           width={110}
           style={{ margin: "0 auto" }}
         />
       </Card>
       </Grid>
      ))}
     
      </Grid>
      </div>
    </>
  );
}
