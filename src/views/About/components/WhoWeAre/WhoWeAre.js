/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const WhoWeAre = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Box>
      <Grid container spacing={4} direction={isMd ? 'row' : 'column'}>
        <Grid
          item
          container
          alignItems={'center'}
          justifyContent="center"
          xs={12}
          md={6}
        >
          <Box>
            <Typography variant={'h4'} gutterBottom sx={{ fontWeight: 700 }}>
              Our Vision
            </Typography>
            <Typography component={'p'} color={'text.secondary'}>
              We believe investing in a tech business is a step towards a
              successful future, we see ourselves as leaders of the tech
              department in our country and aboard, we want to become a tough
              competitor in the international standards.
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          container
          justifyContent="center"
          alignItems="center"
          xs={12}
          md={6}
        >
          <Box>
            <Typography variant={'h4'} gutterBottom sx={{ fontWeight: 700 }}>
              Our mission
            </Typography>
            <Typography component={'p'} color={'text.secondary'}>
              To revolutionize all sectors in our community to meet the tech
              standards of the current world, we believe great technologies can
              contribute to our country’s development process.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default WhoWeAre;
