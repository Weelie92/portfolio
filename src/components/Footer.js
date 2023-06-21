import React from 'react';
import { Box, IconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function Footer() {
  return (
    <Box>
      <IconButton href="https://www.linkedin.com/in/andrelie" target="_blank">
        <LinkedInIcon />
      </IconButton>
      <IconButton href="https://github.com/Weelie92" target="_blank">
        <GitHubIcon />
      </IconButton>
    </Box>
  );
}

export default Footer;
