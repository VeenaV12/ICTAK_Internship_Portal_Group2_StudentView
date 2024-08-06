import { Button, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import Breadcrumbs from '../Breadcrumbs';

const Topics = () => {
  return (
    <>
  <Breadcrumbs/>
  <div className="mt-bc"></div>
   <div style={{marginTop:"8%",marginLeft:"5%"}}>
  <Typography align='center' marginBottom={15} gutterBottom variant="h3" component="div">
       Your dream internship is just a click away!!!
        </Typography>
    <Grid  container spacing={5} style={{marginBottom:"5%"}}>

    <Grid item  xs={12} md={6} sm={6}>
    <Card sx={{ width:{xs:300,sm:300,md:450,lg:550,xl:600},height:350 }}>
      <CardMedia
        sx={{ height: 220 }}
        image="https://neetable.com/img/blog/blog-inner/react-node-js-for-full-stack-web-development/why-combine-react-and-node-js-for-full-stack-web-development.jpg"
        title="fullstackmern"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
        Full Stack Development(MERN)Projects
        </Typography>
       </CardContent>
     {/* <Button style={{backgroundColor:'#00a6bb'}} size="small" color="primary" variant='contained'>
          View
        </Button> */}
    </Card>
    </Grid>
    <Grid item  xs={12} md={6} sm={6}>
    <Card sx={{ width:{xs:300,sm:300,md:450,lg:550,xl:600},height:350}}>
      <CardMedia
        sx={{ height: 220 }}
        image="https://cdn.prod.website-files.com/6523ed2d670117e5922bd1d3/65326efbc467891a3dccba2a_63b53a0acc9926cbd9c5ee70_AI2.jpeg"
        title="Machinelearning"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
        Machine Learning & Artificial Intelligence Projects
        </Typography>
       </CardContent>
      {/* <Button style={{backgroundColor:'#00a6bb'}} size="small" color="primary" variant='contained'>
          View
        </Button>  */}
    </Card>
    </Grid>
    <Grid item  xs={12} md={6} sm={6}>
    <Card sx={{ width:{xs:300,sm:300,md:450,lg:550,xl:600},height:350}}>
      <CardMedia
        sx={{ height: 220 }}
        image="https://abctrainings.in/media/thumbnails/cyber.jpg"
        title="CyberSecurity"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
        Cyber security Analyst Projects
        </Typography>
       </CardContent>
         {/* <Button style={{backgroundColor:'#00a6bb'}} size="small" color="primary" variant='contained'>
          View
        </Button> */}
    </Card>
    </Grid>
    <Grid item  xs={12} md={6} sm={6}>
    <Card sx={{  width:{xs:300,sm:300,md:450,lg:550,xl:600},height:350}}>
      <CardMedia
        sx={{ height: 220 }}
        image="https://s32860.pcdn.co/wp-content/uploads/2020/03/Azure-Devops.png"
        title="Azure_Devops"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
       DevOps with Azure Projects
        </Typography>
       </CardContent>
         {/* <Button style={{backgroundColor:'#00a6bb'}} size="small" color="primary" variant='contained'>
          View
        </Button> */}
    </Card>
    </Grid>
  </Grid>
     
</div>
</>
  )
}

export default Topics