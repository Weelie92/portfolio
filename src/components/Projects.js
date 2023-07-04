import React from 'react';
import { Grid, Card, CardMedia, CardContent, Typography, CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';

function Projects({ projects }) {
  return (
    <Grid container spacing={3} sx={{ paddingTop: '5px' }}>
      {projects.map((project) => (
        <Grid item xs={12} sm={6} md={4} key={project.title}>
          <Card>
            <CardActionArea component={Link} to={`/projects/${project.path}`}>
              <CardMedia component="img" height="140" image={project.image} alt={project.title} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {project.description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default Projects;
