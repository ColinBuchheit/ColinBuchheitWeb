import React, { useState } from 'react';
import { Box, Button, Container, Paper, TextField, Typography, Alert } from '@mui/material';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';

const ContactPage: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [feedback, setFeedback] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs.send(
      process.env.REACT_APP_EMAILJS_SERVICE_ID!,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID!,
      formState,
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY!
    )
    .then((response: { status: any; text: any; }) => {
      console.log('SUCCESS!', response.status, response.text);
      setFeedback('Your message has been sent successfully!');
      setFormState({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    })
    .catch((err: any) => {
      console.error('FAILED...', err);
      setFeedback('Failed to send the message. Please try again later.');
    });
  };

  return (
    <Container maxWidth="sm" sx={{ marginTop: '8rem', paddingBottom: '4rem' }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Paper elevation={3} sx={{ padding: '2.5rem', backgroundColor: '#2a2a2a', color: '#ffffff', borderRadius: '8px' }}>
          <Typography variant="h4" color="primary" gutterBottom>
            Contact Me
          </Typography>
          {feedback && <Alert severity="info">{feedback}</Alert>}
          <Box component="form" onSubmit={handleSubmit} sx={{ marginTop: '2rem' }}>
            <TextField
              name="name"
              label="Your Name"
              fullWidth
              required
              value={formState.name}
              onChange={handleChange}
              sx={{ marginBottom: '1.5rem', backgroundColor: '#ffffff', borderRadius: '4px' }}
            />
            <TextField
              name="email"
              label="Your Email"
              fullWidth
              required
              value={formState.email}
              onChange={handleChange}
              sx={{ marginBottom: '1.5rem', backgroundColor: '#ffffff', borderRadius: '4px' }}
            />
            <TextField
              name="subject"
              label="Subject"
              fullWidth
              required
              value={formState.subject}
              onChange={handleChange}
              sx={{ marginBottom: '1.5rem', backgroundColor: '#ffffff', borderRadius: '4px' }}
            />
            <TextField
              name="message"
              label="Message"
              multiline
              rows={4}
              fullWidth
              required
              value={formState.message}
              onChange={handleChange}
              sx={{ marginBottom: '1.5rem', backgroundColor: '#ffffff', borderRadius: '4px' }}
            />
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Send Message
            </Button>
          </Box>
        </Paper>
      </motion.div>
    </Container>
  );
};

export default ContactPage;
