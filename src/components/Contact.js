import React from 'react';
import { TextField, Button, Box } from '@mui/material';

function Contact() {
  return (
    <Box>
      <TextField label="Name" variant="outlined" />
      <TextField label="Email" variant="outlined" />
      <TextField label="Message" variant="outlined" multiline rows={4} />
      <Button variant="outlined">Submit</Button>
    </Box>
  );
}

export default Contact;
