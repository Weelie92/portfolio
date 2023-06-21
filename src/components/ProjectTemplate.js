import React from 'react';
import { Typography, Box, Button } from '@mui/material';

function ProjectTemplate({ project }) {
  const { title, description, imageUrl } = project;

  return (
    <Box>
      <Typography variant="h4">{title}</Typography>
      <img src={imageUrl} alt={title} />
      <Typography variant="body1">{description}</Typography>
      <Button variant="outlined" href="/projects">
        Back to Projects
      </Button>
    </Box>
  );
}

export default ProjectTemplate;
