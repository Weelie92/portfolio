import React from 'react';
import { Box, Typography, Button, styled } from '@mui/material';

const StyledBox = styled(Box)({
  maxWidth: '600px',
  margin: '0 auto',
});

const StyledImage = styled('img')({
  maxWidth: '100%',
  height: 'auto',
});

function ProjectTemplate({ project }) {
  const { title, description, image } = project;

  return (
    <StyledBox p={2}>
      <Typography variant="h4" align="center" gutterBottom>
        {title}
      </Typography>
      <StyledImage src={image} alt={title} />
      <Typography variant="body1" gutterBottom>
        {description}
      </Typography>
      <Box textAlign="center">
        <Button variant="outlined" href="/projects">
          Back to Projects
        </Button>
      </Box>
    </StyledBox>
  );
}

export default ProjectTemplate;
