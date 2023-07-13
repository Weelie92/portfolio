import React from 'react';
import { Box, IconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => (
  <Box component="footer" display="flex" justifyContent="center" alignItems="center" padding={2}>
    <IconButton href="https://www.linkedin.com/in/andrelie" target="_blank" sx={{ marginRight: 2 }}>
      <LinkedInIcon />
    </IconButton>
    <IconButton href="https://github.com/Weelie92" target="_blank">
      <GitHubIcon />
    </IconButton>
  </Box>
);

export default Footer;
