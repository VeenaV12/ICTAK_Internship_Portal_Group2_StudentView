// ProjectDescription.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import Breadcrumbs from '../Breadcrumbs';

const ProjectDescription = () => {
    const { projectId } = useParams();
    console.log(projectId)
    const [project, setProject] = useState(null);

    useEffect(() => {
        const fetchProject = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/displayproject/${projectId}`);
                console.log(response.data)
                setProject(response.data);
            } catch (error) {
                console.error('Error fetching project:', error);
            }
        };

        fetchProject();
    }, [projectId]);

    if (!project) return <div>Loading...</div>;

    return (
        <>
            <Breadcrumbs />
            <div className="mt-bc"></div>

            <div style={{ marginBottom: '200px', marginTop: '50px', textAlign: 'center' }}>
                <h1>{project.projectName}</h1>
                <div style={{ marginTop: '30px', textAlign: 'justify', fontSize: '18px', fontFamily: 'sans-serif', margin: '0 70px' }}>
                    <p>{project.desc}</p>
                    {/* Additional project details can be displayed here */}
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '20px' }}>
                    <Button style={{ backgroundColor: '#00a6bb' }} variant='contained'>Select</Button>
                    <Link to='/student' style={{ textDecoration: 'none' }}>
                        <Button style={{ backgroundColor: '#00a6bb' }} variant='contained'>Back</Button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default ProjectDescription;
