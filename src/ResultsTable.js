import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function ResultsTable(props) {
  return (
    <TableContainer
      sx={{ mr: "auto", ml: "auto", width: "70%" }}
      component={Paper}
    >
      <Table sx={{ minWidth: 250 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>
              <Typography style={{ paddingLeft: 20 }} variant="h5">
                Player
              </Typography>
            </TableCell>
            <TableCell></TableCell>
            <TableCell align="right">
              <Typography variant="h5">Votes</Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.works
            .sort((a, b) => b.votes - a.votes)
            .map((row) => (
              <TableRow
                key={row.title}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell
                  style={{
                    width: "50px",
                    paddingLeft: 30,
                    paddingTop: 12,
                    paddingBottom: 12,
                  }}
                >
                  <Avatar
                    sx={{ width: 50, height: 50 }}
                    alt="some alt text"
                    src={`/static/images/${row.img}`}
                  />
                </TableCell>
                <TableCell component="th" scope="row">
                  <Typography
                    style={{ fontWeight: 200, textAlign: "center" }}
                    variant="h6"
                  >
                    {row.title}
                  </Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography variant="h6">{row.votes}</Typography>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
