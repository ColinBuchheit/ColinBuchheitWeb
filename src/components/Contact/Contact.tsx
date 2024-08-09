import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './Contact.css';

const Contact: React.FC = () => {
  return (
    <div className="contact-container">
      <Typography variant="h4" gutterBottom>
        Contact
      </Typography>
      <Box component="form" noValidate autoComplete="off">
        <TextField fullWidth label="Name" margin="normal" />
        <TextField fullWidth label="Email" margin="normal" />
        <TextField fullWidth label="Message" margin="normal" multiline rows={4} />
        <Button variant="contained" color="primary" style={{ marginTop: '16px' }}>
          Submit
        </Button>
      </Box>
    </div>
  );
};

export default Contact;

