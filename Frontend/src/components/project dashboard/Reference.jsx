import * as React from 'react';
import Box from '@mui/material/Box';
import { Grid, Paper, styled, Typography } from '@mui/material';
import Breadcrumbs from '../Breadcrumbs';
import axios from 'axios';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Link from '@mui/material/Link';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';


// Styled components for Accordion
const StyledPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(3),
  width: '100%', // Set width to 100% to take full width
  color: theme.palette.text.primary,
}));

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&::before': {
    display: 'none',
  },
  // Ensure Accordion opens downwards
  '&.MuiAccordion-root.Mui-expanded': {
    margin: '8px 0',
    position: 'relative',
    top: '8px',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ExpandMoreIcon />}
    aria-controls="panel-content"
    id="panel-header"
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
  // Ensure AccordionDetails is positioned properly
  position: 'relative',
  top: '8px',
}));

const Reference = () => {
  const [referenceData, setReferenceData] = React.useState([]);
  const [expanded, setExpanded] = React.useState('');

  React.useEffect(() => {
    const fetchReferenceData = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:3000/api/reference/getrefs', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setReferenceData(response.data);
      } catch (error) {
        console.error('Error fetching reference data:', error);
      }
    };

    fetchReferenceData();
  }, []);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : '');
  };

  return (
    <>
      <Breadcrumbs />
      <Box gridColumn="span 12" >
            <Typography style={{ marginTop: "10%", textAlign: "center" ,color:"#00a6bb", marginBottom:"5%"}}variant="h4" >
              Reference Hub!
            </Typography>
          </Box>
        
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          //minHeight: '100vh',
          
          px: { xs: 2, sm: 3, md: 5 },
       
        }}
      >
       
        <Grid container justifyContent="center" alignItems="center" spacing={2}>
          {referenceData.map((week) => (
            <Grid key={week.weekNumber} item xs={11} md={8}>
              <StyledPaper>
                <Accordion expanded={expanded === `panel${week.weekNumber}`} onChange={handleChange(`panel${week.weekNumber}`)}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls={`week${week.weekNumber}-content`}
                    id={`week${week.weekNumber}-header`}
                  >
                    <Typography variant="subtitle1">
                      Week {week.weekNumber}: {week.title}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Grid container spacing={2}>
                      {week.materials &&
                        Array.isArray(week.materials) &&
                        week.materials.map((material, index) => (
                          <Grid item xs={12} key={index}>
                            <Paper variant="outlined" sx={{ p: 2 }}>
                              <Typography variant="h6" gutterBottom>
                                {material.title || 'Untitled Material'}
                              </Typography>
                              <Typography>{material.description || 'No description available.'}</Typography>
                              {/*<Typography>Type: {material.type || 'Unknown'}</Typography>*/}
                              {material.type === 'link' ? (
                                <Link href={material.url} target="_blank" rel="noopener noreferrer">
                                  URL
                                </Link>
                              ) : (
                                <Typography>File: {material.url || 'No file URL available.'}</Typography>
                              )}
                            </Paper>
                          </Grid>
                        ))}
                    </Grid>
                  </AccordionDetails>
                </Accordion>
              </StyledPaper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Reference;
