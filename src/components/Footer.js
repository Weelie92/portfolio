// Footer.js

import React from 'react';
import { Box, IconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function Footer() {
  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <IconButton href="https://www.linkedin.com/in/andrelie" target="_blank" style={{ marginRight: '10px' }}>
        <LinkedInIcon />
      </IconButton>
      <IconButton href="https://github.com/Weelie92" target="_blank">
        <GitHubIcon />
      </IconButton>
    </Box>
  );
}

export default Footer;
