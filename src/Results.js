import React from 'react'
import ResultsTable from './ResultsTable'
import Button from '@mui/material/Button';

export default function Results(props) {
  const { done } = props

  const handleStartOver = (props) => {
    console.log("in handle start over")
    props.done
  }
  return (
    <>
    <h1>Results</h1>
    <ResultsTable works={props.works}/>
    <Button style={{backgroundColor: 'white', color: 'black', fontSize: '1.5em'}} sx={{mt:3}}onClick={done} variant="contained" size="large">Start Over!</Button>
    {/* <button onClick={handleStartOver}>Start Over</button> */}
    </>
  )
}
