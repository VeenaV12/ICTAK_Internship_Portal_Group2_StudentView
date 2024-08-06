import {
  Button,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography
} from '@mui/material';
import React, { useState, useEffect } from 'react';
import Breadcrumbs from '../Breadcrumbs';
import { Link } from 'react-router-dom';
import axiosInstance from './axiosintercepter'; // Ensure this path is correct

const Wsubmitlink8 = () => {
  const [submission, setSubmission] = useState(null); // State to store the fetched submission data
  const [loading, setLoading] = useState(true); // State to manage loading status
  const [isWeek6Graded, setIsWeek6Graded] = useState(false); // State to manage Week 6 grading status

  useEffect(() => {
    const fetchSubmissionData = async () => {
      const token = localStorage.getItem('token');
      try {
        const response = await axiosInstance.post('http://localhost:3000/api/submission/getsubmissiondata', {}, {
          headers: {
            Authorization: `Bearer ${token}`
          } 
        });
        const week1Data = response.data.find(item => item.week_name === 'Viva Voce');
        const week6Data = response.data.find(item => item.week_name === 'Final Report');

        setSubmission(week1Data);
        setIsWeek6Graded(week6Data || week6Data.submission_status === 'Submitted' || week6Data.submission_status);

      } catch (error) {
        console.error('Error fetching submissions:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSubmissionData();
  }, []);

  if (loading) {
    return <Typography variant="h6" style={{ padding: "10px" }}>Loading...</Typography>;
  }

  return (
    <>
      <Breadcrumbs />
      <div style={{ width: "70%", marginLeft: "15%", marginTop: "13%" }}>
        <TableContainer component={Paper} style={{ marginBottom: "20px" }}>
          <Typography variant="h6" style={{ padding: "10px" }}>
            <b>Submission</b>
          </Typography>
          <Table sx={{ minWidth: 650 }} aria-label="submission table">
            <TableBody>
              <TableRow>
                <TableCell component="th" scope="row">Submission Status</TableCell>
                <TableCell align="left">{submission?.submission_status || 'Not submitted'}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">Grading Status</TableCell>
                <TableCell align="left">{submission?.grading_status || 'Not graded'}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">Due date</TableCell>
                <TableCell align="left">12-12-12</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">Online text</TableCell>
                <TableCell align="left">{submission?.online_text || 'No text'}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">Submission comments</TableCell>
                <TableCell align="left">{submission?.submission_comments || 'No comments'}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  {!isWeek6Graded && (
                    <Typography color="error" style={{ marginBottom: '10px' }}>
                      Open only after the Final Report submission.
                    </Typography>
                  )}
                  {submission?.submission_status === 'Submitted' && (
                    <Typography color="primary" style={{ marginBottom: '10px' }}>
                      Your Viva Voce has already been submitted.
                    </Typography>
                  )}
                  <Link to={'/wsubmitform8'} style={{ textDecoration: 'none' }}>
                    <Button 
                      variant="contained" 
                      color="primary" 
                      disabled={submission?.submission_status === 'Submitted' || !isWeek6Graded}
                    >
                      Submit
                    </Button>
                  </Link>
                  <Link to={'/wsubmit'}>
                    <Button variant="outlined" color="error" style={{ marginLeft: '10px' }}>
                      Cancel
                    </Button>
                  </Link>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <TableContainer component={Paper} style={{ marginTop: "20px", marginBottom: "50px" }}>
          <Typography variant="h6" style={{ padding: "10px" }}>
            <b>Feedback</b>
          </Typography>
          <Table sx={{ minWidth: 650 }} aria-label="feedback table">
            <TableBody>
              <TableRow>
                <TableCell component="th" scope="row">Grade</TableCell>
                <TableCell align="left">{submission?.grade || 'Not Submitted'}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">Graded By</TableCell>
                <TableCell align="left">{submission?.graded_by || 'Not graded'}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
}

export default Wsubmitlink8;
