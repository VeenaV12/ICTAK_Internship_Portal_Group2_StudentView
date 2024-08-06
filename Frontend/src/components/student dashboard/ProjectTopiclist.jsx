import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Card, CardContent, Typography, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Breadcrumbs from '../Breadcrumbs';
import { CardActionArea, CardActions } from '@mui/material';

const ProjectTopiclist = () => {
    const navigate = useNavigate()
    const [expandedProjectId, setExpandedProjectId] = useState(null); // Track the expanded project ID for showing description
    const [selectedProjectId, setSelectedProjectId] = useState(null); // Track the selected project ID for confirmation
    const [projects, setProjects] = useState([]);
    const [confirmationOpen, setConfirmationOpen] = useState(false); // State to control dialog visibility
    
  
    const handleViewMore = (projectId) => {
        if (expandedProjectId === projectId) {
            setExpandedProjectId(null); // Collapse the description if it's already expanded
        } else {
            setExpandedProjectId(projectId); // Expand the description of the clicked project
        }
        setSelectedProjectId(null); // Reset selectedProjectId to ensure no confirmation dialog is open
    };

    const handleSelect = (projectId) => {
        setSelectedProjectId(projectId); // Set the selected project ID for confirmation
    };

    const handleCloseConfirmation = () => {
        setSelectedProjectId(null); // Reset selectedProjectId
        setConfirmationOpen(false); // Close the confirmation dialog
    };

    const handleConfirmSelection = async () => {
        try {
            const token = localStorage.getItem('token');
                const response = await axios.post('http://localhost:3000/api/project/selectproject', {
                    selectedProjectId: selectedProjectId},
                   { headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
            console.log(selectedProjectId); // Log selectedProjectId to ensure it's correct
            console.log('Project selected:', response.data);
            alert('Project Selected!');
            navigate('/project')
            setSelectedProjectId(null);
            setConfirmationOpen(false);
        } catch (error) {
            console.error('Error selecting project:', error);
            alert('Failed to select project. Please try again.');
        }
    };
    
    

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get('http://localhost:3000/api/project/displayproject', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setProjects(response.data);
                console.log(response.data);
            } catch (error) {
                console.error('Error fetching projects:', error);
            }
        };

        fetchProjects();
    }, []);

    return (
        <>
            <Breadcrumbs />
            <div className="mt-bc"><Typography align="center" variant="h4" color="orange">
                Explore Projects
                </Typography></div>
               <section>
                <div className="container">

               
            <div className='row'>
              
                {projects.map((project) => (
                    <div key={project._id} style={{ marginTop: '10%', textAlign: 'center',marginBottom:'5%' }} className='col-lg-4'>
                        <Card style={{ backgroundColor: '#d3d3d3' ,margin:'2px'}}>
                            <CardContent>
                                <Typography align='center' style={{ fontSize: '20px' }}>
                                    {project.projectName}
                                </Typography>
                                <Button style={{ backgroundColor: '#00a6bb', margin: '0 auto' }} variant='contained' onClick={() => handleViewMore(project._id)}>
                                    Learn More
                                </Button>
                            </CardContent>

                            {expandedProjectId === project._id && (
                                <Card>
                                    <CardActionArea>
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                Project Description
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {project.desc}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions style={{ display: 'flex', justifyContent: 'center' }}>
                                        <Button size="small" color="primary" onClick={() => handleSelect(project._id)}>
                                            Select
                                        </Button>
                                    </CardActions>
                                </Card>
                            )}

                        </Card>
                    </div>
                ))}

                {/* Confirmation Dialog */}
                <Dialog open={selectedProjectId !== null} onClose={handleCloseConfirmation}>
                    <DialogTitle>Warning!</DialogTitle>
                    <DialogContent>
                        <Typography variant="body1">
                            You cannot change the topic once selected. Are you sure you want to proceed?
                        </Typography>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleCloseConfirmation} color="secondary">
                            Cancel
                        </Button>
                        <Button onClick={handleConfirmSelection} color="primary">
                            Confirm
                        </Button>
                    </DialogActions>
                </Dialog>

            </div>
            </div>
            </section>
        </>
    );
};

export default ProjectTopiclist;
