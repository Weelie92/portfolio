import React from 'react';
import { Typography, Box, Button } from '@mui/material';

function AboutMe() {
  return (
    <Box>
      <Typography variant="h4">About Me</Typography>
      <Typography variant="body1">A longer introduction...</Typography>
      <Button variant="outlined" href="/cv.pdf">
        Download CV
      </Button>
    </Box>
  );
}

export default AboutMe;
