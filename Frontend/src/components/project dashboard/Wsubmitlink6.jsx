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

const Wsubmitlink6 = () => {
  const [submission, setSubmission] = useState(null); // State to store the fetched submission data
  const [loading, setLoading] = useState(true); // State to manage loading status

  useEffect(() => {
    const fetchSubmissionData = async () => {
      const token = localStorage.getItem('token');
      try {
        const response = await axiosInstance.post('http://localhost:3000/api/submission/getsubmissiondata', {}, {
          headers: {
            Authorization: `Bearer ${token}`
          } 
        });

        // Assuming the API returns an array of submissions, find Week 1 data
        const week1Data = response.data.find(item => item.week_name === 'Week 6');
        setSubmission(week1Data || null);
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
      <Grid container justifyContent="center" style={{ marginTop: "13%" }}>
        <Grid item xs={12} md={10} lg={8}>
          <TableContainer component={Paper} style={{ marginBottom: "20px" }}>
            <Typography variant="h6" style={{ padding: "10px" }}>
              <b>Submission</b>
            </Typography>
            <Table sx={{ minWidth: 650 }} aria-label="submission 6 table">
              <TableBody>
                <TableRow>
                  <TableCell component="th" scope="row">Submission Status</TableCell>
                  <TableCell align="left">{submission ? submission.submission_status : 'Not Submitted'}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">Grading Status</TableCell>
                  <TableCell align="left">{submission ? submission.grading_status : 'Not Graded'}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">Due Date</TableCell>
                  <TableCell align="left">12-12-12</TableCell> {/* Adjust this as needed */}
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">Online Text</TableCell>
                  <TableCell align="left">{submission ? submission.online_text : 'No Text'}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">Submission Comments</TableCell>
                  <TableCell align="left">{submission ? submission.submission_comments : 'No Comments'}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    <Link to={'/wsubmitform6'} style={{ textDecoration: 'none' }}>
                      <Button 
                        variant="contained" 
                        color="primary" 
                        disabled={submission && submission.submission_status === 'Submitted'}
                      >
                        Submit
                      </Button>
                    </Link>
                    <Link to={'/wsubmit'}>
                      <Button variant="outlined" color="error" style={{ marginLeft: '10px' }}>Cancel</Button>
                    </Link>
                  </TableCell>
                  <TableCell align="left"></TableCell>
                </TableRow>
                {submission && submission.submission_status === 'Submitted' && (
                  <TableRow>
                    <TableCell colSpan={2} align="center">
                      <Typography variant="h6" color="textSecondary">
                        Submission has been completed.
                      </Typography>
                    </TableCell>
                  </TableRow>
                )}
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
                  <TableCell align="left">{submission ? submission.grade : 'Not Graded'}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">Graded By</TableCell>
                  <TableCell align="left">{submission ? submission.graded_by : 'Not Graded'}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </>
  );
};

export default Wsubmitlink6;
