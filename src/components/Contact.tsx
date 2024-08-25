import React, { useState, useRef } from 'react';
import { Box, Button, Container, Paper, TextField, Typography, Alert } from '@mui/material';
import emailjs from 'emailjs-com';
import ReCAPTCHA from 'react-google-recaptcha';

const ContactPage: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [feedback, setFeedback] = useState<string | null>(null);
  const [recaptchaVerified, setRecaptchaVerified] = useState<boolean>(false);

  const handleRecaptchaChange = (value: string | null) => {
    setRecaptchaVerified(Boolean(value));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!recaptchaVerified) {
      setFeedback('Please complete the reCAPTCHA.');
      return;
    }

    const recaptchaResponse = (document.getElementById('g-recaptcha-response') as HTMLInputElement)?.value;

    if (!recaptchaResponse) {
      setFeedback('Please complete the reCAPTCHA.');
      return;
    }

    const templateParams = {
      from_name: formState.name,
      from_email: formState.email,
      subject: formState.subject,
      message: formState.message,
      'g-recaptcha-response': recaptchaResponse,
    };

    if (formRef.current) {
      emailjs.sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID!,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID!,
        formRef.current,
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
          setRecaptchaVerified(false); // Reset reCAPTCHA after successful submission

          // Send an email to the user as confirmation
          emailjs.send(
            process.env.REACT_APP_EMAILJS_SERVICE_ID!,
            process.env.REACT_APP_EMAILJS_AUTO_REPLY_TEMPLATE_ID!,
            templateParams,
            process.env.REACT_APP_EMAILJS_PUBLIC_KEY!
          )
          .then((response: { status: any; text: any; }) => {
            console.log('Auto-reply sent to user successfully!', response.status, response.text);
          })
          .catch((err: any) => {
            console.error('Failed to send auto-reply email.', err);
          });

        })
        .catch((err: any) => {
          console.error('FAILED...', err);
          setFeedback('Failed to send the message. Please try again later.');
        });
    }
  };

  return (
    <Container maxWidth="sm" sx={{ marginTop: '8rem', paddingBottom: '4rem' }}>
      <Paper elevation={3} sx={{ padding: '2.5rem', backgroundColor: '#2a2a2a', color: '#ffffff', borderRadius: '8px' }}>
        <Typography variant="h4" color="primary" gutterBottom>
          Contact Me
        </Typography>
        {feedback && (
          <Alert
            severity={feedback.includes('successfully') ? 'success' : 'error'}
            sx={{ mb: 2 }}
          >
            {feedback}
          </Alert>
        )}
        <form ref={formRef} onSubmit={handleSubmit} id="contactForm">
          <TextField
            name="name"
            label="Your Name"
            fullWidth
            required
            value={formState.name}
            onChange={handleChange}
            sx={{
              marginBottom: '1.5rem',
              backgroundColor: '#000000',
              borderRadius: '4px',
              input: { color: '#ffffff' },
              label: { color: '#ffffff' },
              '&:-webkit-autofill': {
                WebkitBoxShadow: '0 0 0px 1000px #000000 inset',
                WebkitTextFillColor: '#ffffff',
              }
            }}
          />
          <TextField
            name="email"
            label="Your Email"
            fullWidth
            required
            value={formState.email}
            onChange={handleChange}
            sx={{
              marginBottom: '1.5rem',
              backgroundColor: '#000000',
              borderRadius: '4px',
              input: { color: '#ffffff' },
              label: { color: '#ffffff' },
              '&:-webkit-autofill': {
                WebkitBoxShadow: '0 0 0px 1000px #000000 inset',
                WebkitTextFillColor: '#ffffff',
              }
            }}
          />
          <TextField
            name="subject"
            label="Subject"
            fullWidth
            required
            value={formState.subject}
            onChange={handleChange}
            sx={{
              marginBottom: '1.5rem',
              backgroundColor: '#000000',
              borderRadius: '4px',
              input: { color: '#ffffff' },
              label: { color: '#ffffff' },
              '&:-webkit-autofill': {
                WebkitBoxShadow: '0 0 0px 1000px #000000 inset',
                WebkitTextFillColor: '#ffffff',
              }
            }}
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
            InputProps={{
              style: {
                color: '#ffffff', // Text color white
              },
            }}
            InputLabelProps={{
              style: {
                color: '#ffffff', // Label color white
              },
            }}
            sx={{ marginBottom: '1.5rem', backgroundColor: '#000000', borderRadius: '4px' }} // Background color black
          />

          {/* reCAPTCHA widget */}
          <div style={{ marginBottom: '1.5rem' }}>
            <ReCAPTCHA
              sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY!}
              onChange={handleRecaptchaChange}
              theme="dark"
            />
          </div>
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Send Message
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default ContactPage;
