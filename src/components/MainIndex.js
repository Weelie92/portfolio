import React from 'react';
import { Typography, Box, Button } from '@mui/material';

function MainIndex() {
  return (
    <Box>
      <Typography variant="h4">Hello, I'm [Your Name]</Typography>
      <Typography variant="h6">A brief introduction...</Typography>
      <Button variant="outlined" href="/projects">
        See My Projects
      </Button>
    </Box>
  );
}

export default MainIndex;
