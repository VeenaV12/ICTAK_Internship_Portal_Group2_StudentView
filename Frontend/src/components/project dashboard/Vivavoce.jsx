import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../Breadcrumbs';

const Vivavoce = () => {
  return (
    <>
    <Breadcrumbs/>
    <div style={{ width: "70%", marginLeft: "15%", marginTop: "13%" }}>
      <TableContainer component={Paper} style={{ marginBottom: "20px" }}>
        <Typography variant="h6" style={{ padding: "10px" }}>
          <b>Submission </b>
        </Typography>
        <Table sx={{ minWidth: 650 }} aria-label="submission 1 table">
          <TableBody>
            <TableRow>
              <TableCell component="th" scope="row">Submission status</TableCell>
              <TableCell align="left">not submitted</TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">Grading status</TableCell>
              <TableCell align="left">not graded</TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">Due date</TableCell>
              <TableCell align="left">12-12-12</TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">Online text</TableCell>
              <TableCell align="left">Submit the assignment</TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">Submission comments</TableCell>
              <TableCell align="left">None</TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
              <Link to={'/wsubmitform1'} style={{ textDecoration: 'none' }}><Button variant="contained" color="primary">Submit</Button></Link>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <TableContainer component={Paper} style={{ marginTop: "20px",marginBottom:"50px" }}>
        <Typography variant="h6" style={{ padding: "10px" }}>
          <b>Feedback</b>
        </Typography>
        <Table sx={{ minWidth: 650 }} aria-label="submission 2 table">
          <TableBody>
            <TableRow>
              <TableCell component="th" scope="row">Grade</TableCell>
              <TableCell align="left">not submitted</TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">Graded By</TableCell>
              <TableCell align="left">not graded</TableCell>
            </TableRow>
            
          </TableBody>
        </Table>
      </TableContainer>
    </div>
    </>
  )
}

export default Vivavoce