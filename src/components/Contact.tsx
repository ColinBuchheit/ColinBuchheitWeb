import React, { useState, useRef, useEffect } from 'react';
import { 
  Box, 
  Button, 
  Container, 
  Paper, 
  TextField, 
  Typography, 
  Alert,
  Grid,
  IconButton,
  InputAdornment,
  Snackbar,
  CircularProgress
} from '@mui/material';
import { 
  EmailOutlined,
  PersonOutline,
  SubjectOutlined,
  MessageOutlined,
  GitHub,
  LinkedIn,
  LocationOn,
  Send as SendIcon
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import ReCAPTCHA from 'react-google-recaptcha';

// Animation variants
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { duration: 0.6 }
  }
};

const slideUp = {
  hidden: { y: 50, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

// Declare the `grecaptcha` property on the `window` object
declare global {
  interface Window {
    grecaptcha: any;
  }
}

const ContactPage: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [feedback, setFeedback] = useState<string | null>(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [recaptchaVerified, setRecaptchaVerified] = useState<string | null>(null);
  const [submitLoading, setSubmitLoading] = useState(false);
  const [formErrors, setFormErrors] = useState({
    name: false,
    email: false,
    subject: false,
    message: false,
  });

  useEffect(() => {
    if (feedback) {
      setSnackbarOpen(true);
      const timer = setTimeout(() => {
        setSnackbarOpen(false);
      }, 6000);
      return () => clearTimeout(timer);
    }
  }, [feedback]);

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const handleRecaptchaChange = (value: string | null) => {
    setRecaptchaVerified(value);
    if (value) {
      setFeedback(null);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
    
    // Clear error when user starts typing
    if (formErrors[name as keyof typeof formErrors]) {
      setFormErrors({
        ...formErrors,
        [name]: false
      });
    }
  };

  const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = (): boolean => {
    const errors = {
      name: formState.name.trim() === '',
      email: !isValidEmail(formState.email),
      subject: formState.subject.trim() === '',
      message: formState.message.trim() === '',
    };
    
    setFormErrors(errors);
    return !Object.values(errors).some(error => error);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    if (!recaptchaVerified) {
      setFeedback('Please complete the reCAPTCHA verification.');
      return;
    }

    setSubmitLoading(true);

    const templateParams = {
      from_name: formState.name,
      from_email: formState.email,
      subject: formState.subject,
      message: formState.message,
      'g-recaptcha-response': recaptchaVerified,
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
          setFeedback('Your message has been sent successfully! I will get back to you soon.');
          setFormState({
            name: '',
            email: '',
            subject: '',
            message: '',
          });
          setRecaptchaVerified(null);

          if (window.grecaptcha) {
            window.grecaptcha.reset();
          }

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
          })
          .finally(() => {
            setSubmitLoading(false);
          });
        })
        .catch((err: any) => {
          console.error('FAILED...', err);
          setFeedback('Failed to send the message. Please try again later.');
          setSubmitLoading(false);
        });
    }
  };

  return (
    <Box
      sx={{
        background: 'linear-gradient(135deg, #121212 0%, #1a1a1a 100%)',
        pt: { xs: 8, md: 12 },
        pb: 8,
        minHeight: '100vh'
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <Box sx={{ mb: 5, textAlign: { xs: 'center', md: 'left' } }}>
            <Typography 
              variant="overline" 
              color="primary"
              sx={{ letterSpacing: 2, fontWeight: 500 }}
            >
              GET IN TOUCH
            </Typography>
            <Typography 
              variant="h3" 
              gutterBottom
              sx={{ 
                fontWeight: 700,
                fontSize: { xs: '2rem', md: '2.5rem' },
                background: 'linear-gradient(90deg, #6d9eeb 0%, #4ecca3 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              Contact Me
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                color: 'rgba(255,255,255,0.7)',
                maxWidth: '800px',
                mx: { xs: 'auto', md: 0 }
              }}
            >
              Have a question or interested in working together? I'd love to hear from you!
            </Typography>
          </Box>
        </motion.div>
        
        <Grid container spacing={4}>
          <Grid item xs={12} md={5}>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={slideUp}
            >
              <Paper 
                elevation={0}
                sx={{ 
                  borderRadius: '16px',
                  overflow: 'hidden',
                  background: 'linear-gradient(145deg, #1e1e1e 0%, #262626 100%)',
                  boxShadow: '0 10px 40px rgba(0,0,0,0.2)',
                  border: '1px solid rgba(255,255,255,0.05)',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                {/* Header with gradient */}
                <Box 
                  sx={{ 
                    p: 0.5, 
                    background: 'linear-gradient(90deg, #6d9eeb 0%, #4ecca3 100%)'
                  }}
                />
                
                <Box sx={{ p: 4, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                  <Typography 
                    variant="h4" 
                    color="primary" 
                    gutterBottom
                    sx={{ fontWeight: 600, mb: 3 }}
                  >
                    Connect With Me
                  </Typography>
                  
                  <Typography 
                    variant="body1" 
                    sx={{ mb: 4, color: 'rgba(255,255,255,0.9)' }}
                  >
                    I'd love to hear from you! Whether you have a question, suggestion, or just want to connect, 
                    feel free to reach out. I'll do my best to get back to you as soon as possible.
                  </Typography>
                  
                  <Box sx={{ mb: 4 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                      <Box sx={{ 
                        mr: 2, 
                        bgcolor: 'rgba(109, 158, 235, 0.1)', 
                        p: 1.5,
                        borderRadius: '50%'
                      }}>
                        <EmailOutlined sx={{ color: '#6d9eeb', fontSize: '1.5rem' }} />
                      </Box>
                      <Box>
                        <Typography variant="subtitle2" sx={{ color: '#b0b0b0', mb: 0.5 }}>
                          Email
                        </Typography>
                        <Typography variant="body1" sx={{ color: '#ffffff' }}>
                          contact@colinbuchheit.com
                        </Typography>
                      </Box>
                    </Box>
                    
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                      <Box sx={{ 
                        mr: 2, 
                        bgcolor: 'rgba(78, 204, 163, 0.1)', 
                        p: 1.5,
                        borderRadius: '50%'
                      }}>
                        <LocationOn sx={{ color: '#4ecca3', fontSize: '1.5rem' }} />
                      </Box>
                      <Box>
                        <Typography variant="subtitle2" sx={{ color: '#b0b0b0', mb: 0.5 }}>
                          Location
                        </Typography>
                        <Typography variant="body1" sx={{ color: '#ffffff' }}>
                          Columbia, Missouri, USA
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                  
                  <Typography 
                    variant="h6" 
                    color="primary" 
                    gutterBottom
                    sx={{ fontWeight: 500, mb: 2 }}
                  >
                    Social Profiles
                  </Typography>
                  
                  <Box sx={{ display: 'flex', gap: 2 }}>
                    <motion.div whileHover={{ y: -5 }} whileTap={{ y: 0 }}>
                      <IconButton 
                        href="https://github.com/ColinBuchheit" 
                        target="_blank"
                        aria-label="GitHub"
                        sx={{ 
                          backgroundColor: 'rgba(255,255,255,0.05)',
                          padding: 1.5,
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            backgroundColor: 'rgba(255,255,255,0.1)',
                          }
                        }}
                      >
                        <GitHub sx={{ color: '#ffffff', fontSize: '1.6rem' }} />
                      </IconButton>
                    </motion.div>
                    
                    <motion.div whileHover={{ y: -5 }} whileTap={{ y: 0 }}>
                      <IconButton 
                        href="https://www.linkedin.com/in/colin-buchheit-02a3aa22b/" 
                        target="_blank"
                        aria-label="LinkedIn"
                        sx={{ 
                          backgroundColor: 'rgba(255,255,255,0.05)',
                          padding: 1.5,
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            backgroundColor: 'rgba(255,255,255,0.1)',
                          }
                        }}
                      >
                        <LinkedIn sx={{ color: '#ffffff', fontSize: '1.6rem' }} />
                      </IconButton>
                    </motion.div>
                  </Box>
                  
                  <Box sx={{ mt: 'auto', pt: 4 }}>
                    <Box
                      component="img"
                      src="/images/contact-illustration.svg"
                      alt="Contact"
                      sx={{ 
                        width: '100%',
                        maxWidth: '200px',
                        height: 'auto',
                        opacity: 0.8,
                        mx: 'auto',
                        display: 'block'
                      }}
                    />
                  </Box>
                </Box>
              </Paper>
            </motion.div>
          </Grid>
          
          <Grid item xs={12} md={7}>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={slideUp}
            >
              <Paper 
                elevation={0}
                sx={{ 
                  borderRadius: '16px',
                  overflow: 'hidden',
                  background: 'linear-gradient(145deg, #1e1e1e 0%, #262626 100%)',
                  boxShadow: '0 10px 40px rgba(0,0,0,0.2)',
                  border: '1px solid rgba(255,255,255,0.05)'
                }}
              >
                {/* Header with gradient */}
                <Box 
                  sx={{ 
                    p: 0.5, 
                    background: 'linear-gradient(90deg, #6d9eeb 0%, #4ecca3 100%)'
                  }}
                />
                
                <Box sx={{ p: 4 }}>
                  <Typography 
                    variant="h4" 
                    color="primary" 
                    gutterBottom
                    sx={{ fontWeight: 600, mb: 3 }}
                  >
                    Send Me a Message
                  </Typography>
                  
                  <form ref={formRef} onSubmit={handleSubmit} id="contactForm">
                    <Grid container spacing={3}>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          name="name"
                          label="Your Name"
                          fullWidth
                          required
                          value={formState.name}
                          onChange={handleChange}
                          error={formErrors.name}
                          helperText={formErrors.name ? 'Name is required' : ''}
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <PersonOutline sx={{ color: '#6d9eeb' }} />
                              </InputAdornment>
                            ),
                          }}
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              borderRadius: '8px',
                              backgroundColor: 'rgba(0,0,0,0.2)',
                              '& fieldset': {
                                borderColor: 'rgba(255,255,255,0.1)',
                              },
                              '&:hover fieldset': {
                                borderColor: 'rgba(109, 158, 235, 0.5)',
                              },
                              '&.Mui-focused fieldset': {
                                borderColor: '#6d9eeb',
                              },
                            },
                            '& .MuiInputLabel-root': {
                              color: 'rgba(255,255,255,0.7)',
                            },
                            '& .MuiInputBase-input': {
                              color: '#ffffff',
                            },
                          }}
                        />
                      </Grid>
                      
                      <Grid item xs={12} sm={6}>
                        <TextField
                          name="email"
                          label="Your Email"
                          fullWidth
                          required
                          value={formState.email}
                          onChange={handleChange}
                          error={formErrors.email}
                          helperText={formErrors.email ? 'Valid email is required' : ''}
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <EmailOutlined sx={{ color: '#4ecca3' }} />
                              </InputAdornment>
                            ),
                          }}
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              borderRadius: '8px',
                              backgroundColor: 'rgba(0,0,0,0.2)',
                              '& fieldset': {
                                borderColor: 'rgba(255,255,255,0.1)',
                              },
                              '&:hover fieldset': {
                                borderColor: 'rgba(78, 204, 163, 0.5)',
                              },
                              '&.Mui-focused fieldset': {
                                borderColor: '#4ecca3',
                              },
                            },
                            '& .MuiInputLabel-root': {
                              color: 'rgba(255,255,255,0.7)',
                            },
                            '& .MuiInputBase-input': {
                              color: '#ffffff',
                            },
                          }}
                        />
                      </Grid>
                      
                      <Grid item xs={12}>
                        <TextField
                          name="subject"
                          label="Subject"
                          fullWidth
                          required
                          value={formState.subject}
                          onChange={handleChange}
                          error={formErrors.subject}
                          helperText={formErrors.subject ? 'Subject is required' : ''}
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <SubjectOutlined sx={{ color: '#6d9eeb' }} />
                              </InputAdornment>
                            ),
                          }}
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              borderRadius: '8px',
                              backgroundColor: 'rgba(0,0,0,0.2)',
                              '& fieldset': {
                                borderColor: 'rgba(255,255,255,0.1)',
                              },
                              '&:hover fieldset': {
                                borderColor: 'rgba(109, 158, 235, 0.5)',
                              },
                              '&.Mui-focused fieldset': {
                                borderColor: '#6d9eeb',
                              },
                            },
                            '& .MuiInputLabel-root': {
                              color: 'rgba(255,255,255,0.7)',
                            },
                            '& .MuiInputBase-input': {
                              color: '#ffffff',
                            },
                          }}
                        />
                      </Grid>
                      
                      <Grid item xs={12}>
                        <TextField
                          name="message"
                          label="Message"
                          multiline
                          rows={5}
                          fullWidth
                          required
                          value={formState.message}
                          onChange={handleChange}
                          error={formErrors.message}
                          helperText={formErrors.message ? 'Message is required' : ''}
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <MessageOutlined sx={{ color: '#4ecca3', mt: 1 }} />
                              </InputAdornment>
                            ),
                          }}
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              borderRadius: '8px',
                              backgroundColor: 'rgba(0,0,0,0.2)',
                              '& fieldset': {
                                borderColor: 'rgba(255,255,255,0.1)',
                              },
                              '&:hover fieldset': {
                                borderColor: 'rgba(78, 204, 163, 0.5)',
                              },
                              '&.Mui-focused fieldset': {
                                borderColor: '#4ecca3',
                              },
                            },
                            '& .MuiInputLabel-root': {
                              color: 'rgba(255,255,255,0.7)',
                            },
                            '& .MuiInputBase-input': {
                              color: '#ffffff',
                            },
                          }}
                        />
                      </Grid>
                      
                      <Grid item xs={12}>
                        <Box 
                          sx={{ 
                            backgroundColor: 'rgba(0,0,0,0.2)',
                            p: 2,
                            borderRadius: '8px',
                            border: '1px solid rgba(255,255,255,0.05)'
                          }}
                        >
                          <ReCAPTCHA
                            sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY!}
                            onChange={handleRecaptchaChange}
                            theme="dark"
                          />
                        </Box>
                      </Grid>
                      
                      <Grid item xs={12}>
                        <Button
                          type="submit"
                          variant="contained"
                          fullWidth
                          disabled={submitLoading}
                          sx={{
                            py: 1.5,
                            background: 'linear-gradient(90deg, #6d9eeb 0%, #4ecca3 100%)',
                            borderRadius: '8px',
                            textTransform: 'none',
                            fontSize: '1rem',
                            fontWeight: 600,
                            boxShadow: '0 4px 14px rgba(109, 158, 235, 0.3)',
                            '&:hover': {
                              background: 'linear-gradient(90deg, #5a8ad6 0%, #3db390 100%)',
                              boxShadow: '0 6px 20px rgba(109, 158, 235, 0.4)',
                            }
                          }}
                          endIcon={
                            submitLoading ? 
                              <CircularProgress size={20} color="inherit" /> : 
                              <SendIcon />
                          }
                        >
                          {submitLoading ? 'Sending...' : 'Send Message'}
                        </Button>
                      </Grid>
                    </Grid>
                  </form>
                </Box>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
      
      {/* Feedback Snackbar */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert 
          onClose={handleSnackbarClose} 
          severity={feedback?.includes('successfully') ? 'success' : 'error'}
          sx={{ 
            width: '100%',
            backgroundColor: feedback?.includes('successfully') ? 'rgba(78, 204, 163, 0.9)' : 'rgba(244, 67, 54, 0.9)',
            color: '#ffffff',
            '& .MuiAlert-icon': {
              color: '#ffffff'
            }
          }}
        >
          {feedback}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ContactPage;