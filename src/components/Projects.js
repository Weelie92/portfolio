import React from 'react';
import { Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';

const projects = [
  {
    title: 'Project 1',
    description: 'Description for Project 1',
    imageUrl: 'url-to-image-1',
  },
  // More projects...
];

function Projects() {
  return (
    <Grid container spacing={3}>
      {projects.map((project) => (
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardMedia component="img" height="140" image={project.imageUrl} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {project.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {project.description}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default Projects;
