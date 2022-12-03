import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import axios from 'axios';
import Main from 'layouts/Main';
import Container from 'components/Container';
import { Contact, Form, Hero, Newsletter } from './components';

const ContactPage = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleContact = async (v) => {
    try {
      setLoading(true);
      const res = await axios.post(`http://localhost:9000/api/send-email`, {
        user: v,
      });
      console.log(res);
      setLoading(false);
      setMessage('Done!');
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  const theme = useTheme();

  return (
    <Main>
      <Box
        sx={{
          position: 'relative',
          backgroundColor: theme.palette.alternate.main,
          backgroundImage: `linear-gradient(120deg, ${theme.palette.alternate.dark} 0%, ${theme.palette.background.paper} 100%)`,
          marginTop: -13,
          paddingTop: 13,
        }}
      >
        <Container>
          <Hero />
        </Container>
      </Box>
      <Contact />
      <Box bgcolor={'alternate.main'}>
        <Container>
          <Form
            handleSendEmail={handleContact}
            loading={loading}
            message={message}
          />
        </Container>
      </Box>
    </Main>
  );
};

export default ContactPage;
