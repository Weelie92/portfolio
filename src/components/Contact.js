import React, { useState } from 'react';
import { TextField, Button, Box, Snackbar, Alert } from '@mui/material';
import emailjs from 'emailjs-com';

const validateName = (name) => {
  // Perform name validation logic here
  return name.trim().length > 0;
};

const validateEmail = (email) => {
  // Perform email validation logic here
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const validateMessage = (message) => {
  // Perform message validation logic here
  return message.trim().length > 0;
};

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [open, setOpen] = useState(false);
  const [alertType, setAlertType] = useState('success');
  const [alertMessage, setAlertMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const isNameValid = validateName(name);
    const isEmailValid = validateEmail(email);
    const isMessageValid = validateMessage(message);

    if (isNameValid && isEmailValid && isMessageValid) {
      emailjs
        .send(
          'service_1mcazda',
          'template_8up5sxv',
          {
            name: name,
            email: email,
            message: message,
          },
          'aTkUCqyUslvTHpLrl'
        )
        .then(
          (response) => {
            console.log('SUCCESS!', response.status, response.text);
            setAlertMessage('Your message has been sent. Thank you!');
            setAlertType('success');
            setOpen(true);
            setName('');
            setEmail('');
            setMessage('');
          },
          (error) => {
            console.log('FAILED...', error);
            setAlertMessage('Failed to send message. Please try again.');
            setAlertType('error');
            setOpen(true);
          }
        );
    } else {
      setAlertMessage('Please fill out all fields.');
      setAlertType('error');
      setOpen(true);
    }
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <Box sx={{ justifyContent: 'center', display: 'flex', padding: '20px', borderRadius: '5px' }}>
      <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', maxWidth: '1000px' }}>
        <TextField label="Name" variant="outlined" name="name" value={name} onChange={(e) => setName(e.target.value)} sx={{ marginBottom: '16px' }} />
        <TextField label="Email" variant="outlined" name="email" value={email} onChange={(e) => setEmail(e.target.value)} sx={{ marginBottom: '16px' }} />
        <TextField
          label="Message"
          variant="outlined"
          multiline
          rows={4}
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          sx={{ marginBottom: '16px' }}
        />
        <Button variant="outlined" type="submit" sx={{ marginBottom: '16px' }}>
          Submit
        </Button>
      </Box>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={alertType} sx={{ width: '100%' }}>
          {alertMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default Contact;

/* emailjs
      .send(
        'service_1mcazda',
        'template_8up5sxv',
        {
          name: name,
          email: email,
          message: message,
        },
        'aTkUCqyUslvTHpLrl'
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
        },
        (error) => {
          console.log('FAILED...', error);
        }
      ); */
