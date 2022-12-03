import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import { Typography, Grid } from '@mui/material';
import { Map, Form } from './components';
import axios from 'axios';
const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleContact = async (v) => {
    try {
      setLoading(true);
      const headers = {
        'Content-Type': 'application/json',
      };
      const res = await axios.post(
        `https://silicon-website-api.herokuapp.com/api/send-email`,
        {
          user: v,
        },
        {
          headers,
        },
      );
      console.log(res);
      setLoading(false);
      setMessage('Done!');
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          variant={'h4'}
          gutterBottom
          align={'center'}
          sx={{ fontWeight: 700 }}
        >
          Intersted in working with us?
        </Typography>
      </Box>
      <Grid container spacing={isMd ? 8 : 4}>
        <Grid item xs={12} md={6}>
          <Map />
        </Grid>
        <Grid item container xs={12} md={6} alignItems={'center'}>
          <Form
            handleSendEmail={handleContact}
            loading={loading}
            message={message}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contact;
