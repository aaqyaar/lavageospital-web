/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const Hero = () => {
  const theme = useTheme();

  return (
    <Grid container spacing={4}>
      <Grid item container alignItems={'center'} xs={12} md={6}>
        <Box>
          <Box marginBottom={2}>
            <Typography
              variant="h2"
              color="text.primary"
              sx={{
                fontWeight: 700,
              }}
            >
              Contact me
            </Typography>
          </Box>
          <Box>
            <Typography
              variant="h6"
              component="p"
              color="text.secondary"
              sx={{ fontWeight: 400 }}
            >
              Dr Abdullahi Jamal Said Will tell the best guide to get a health
              so contact him.
            </Typography>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box
          sx={{
            maxWidth: 450,
            position: 'relative',
            marginX: 'auto',
            perspective: 1500,
            transformStyle: 'preserve-3d',
            perspectiveOrigin: 0,
          }}
        >
          <Box
            sx={{
              position: 'relative',
              borderRadius: '2.75rem',
              boxShadow: 1,
              width: '100% !important',
              marginX: 'auto',
              // transform: 'rotateY(-35deg) rotateX(15deg) translateZ(0)',
            }}
          >
            <Box>
              <Box
                position={'relative'}
                zIndex={1}
                component={LazyLoadImage}
                src="https://www.freepnglogos.com/uploads/doctor-png/doctor-bulk-billing-doctors-chapel-hill-health-care-medical-3.png"
                maxWidth={1}
                height={'auto'}
                sx={{ verticalAlign: 'middle' }}
              />
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Hero;
