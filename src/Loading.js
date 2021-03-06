import React from "react";
import Grid from "@mui/material/Grid";
import Card from '@mui/material/Card';
import Skeleton from "@mui/material/Skeleton";
import { Typography } from "@mui/material";

export default function Loading() {
  return (
    <>
    <div className="App">
    <Grid container wrap="wrap" spacing={2} columns={12} sx={{ pl: 1, pt: 10 }} style={{ padding: "35px 0 0 22px", margin: 0}}>
      {Array.from(new Array(12)).map((item, index) => (
         <Grid key={`grid-item-${index}`} item xs={3} style={{ marginBottom: 34}}>
         <Card key={`card-${index}`} style={{ height: 267, width: 188, paddingTop: 28, boxSizing: "border-box", backgroundColor: 'rgba(255, 555, 255, 0.1)' }}>    
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
