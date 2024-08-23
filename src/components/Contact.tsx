import React from 'react';
import { Box, Typography, TextField, Button, Container, Paper } from '@mui/material';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  return (
    <Container maxWidth="sm">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography variant="h2" gutterBottom color="primary">
          Contact Me
        </Typography>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Paper elevation={3} sx={{ padding: '2rem' }}>
          <Box
            component="form"
            sx={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
            noValidate
            autoComplete="off"
          >
            <TextField label="Name" variant="outlined" fullWidth color="primary" />
            <TextField label="Email" variant="outlined" fullWidth color="primary" />
            <TextField
              label="Message"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              color="primary"
            />
            <Button variant="contained" color="primary" size="large">
              Send Message
            </Button>
          </Box>
        </Paper>
      </motion.div>
    </Container>
  );
};

export default Contact;
