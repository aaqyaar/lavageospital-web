import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';

function ClientFeatures({ theme }) {
  return (
    <Grid item xs={12} sm={6} data-aos={'fade-up'}>
      <Grid
        container
        alignItems="center"
        sx={{
          marginTop: { xs: 0, md: '40%' },
        }}
      >
        <Box marginTop={3}>
          <Typography variant={'h5'} fontWeight={700} gutterBottom>
            Client Features
          </Typography>
        </Box>
        {[
          'The client can search for products or can go to the shop directory and start filtering through products using different filtering options,',
          'the client can sign up using email or his/her Google account, ',
          'clients can add items to the cart, apply coupon codes for discounts, ',
          'choose the delivery address, and pay using various payment methods. ',
          'Clients can track their orders and manage their profile information.',
        ].map((item, i) => (
          <Grid item xs={12} key={i}>
            <Box component={ListItem} disableGutters width={'auto'} padding={0}>
              <Box
                component={ListItemAvatar}
                minWidth={'auto !important'}
                marginRight={2}
              >
                <Box
                  component={Avatar}
                  bgcolor={theme.palette.secondary.main}
                  width={20}
                  height={20}
                >
                  <svg
                    width={12}
                    height={12}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Box>
              </Box>
              <ListItemText primary={item} />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}

export default ClientFeatures;
