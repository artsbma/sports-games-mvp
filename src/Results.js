import React from 'react'
import ResultsTable from './ResultsTable'
import Button from '@mui/material/Button';
import { Typography } from "@mui/material";

export default function Results(props) {
  const { done } = props

  const handleStartOver = (props) => {
    console.log("in handle start over")
    props.done
  }
  return (
    <>
    <Typography sx={{mb: 10}} variant='h1'>Results</Typography>
    <ResultsTable sx={{mb: 5}} works={props.works}/>
    <Button style={{backgroundColor: 'white', color: 'black', fontSize: '1.5em'}} sx={{mt:7}}onClick={done} variant="contained" size="large">Start Over</Button>
    </>
  )
}
