/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const Story = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Box>
      <Grid container spacing={4} direction={isMd ? 'row' : 'column'}>
        <Grid item container alignItems={'center'} xs={12} md={6}>
          <Box>
            <Typography variant={'h4'} gutterBottom sx={{ fontWeight: 700 }}>
              My story
            </Typography>
            <Typography component={'p'}>
              Silicon is a Somali born tech business that specializes in Tech
              Products and Services, in our developing country day after day
              technology is becoming a crucial part of our life, a lot of things
              are evolving and changing to catch up with the world of
              technology, so the need for tech specialists is in high demand and
              We’re the people to Cover It!
              <br />
              <br />
              Silicon covers all the tech needs of different sectors of our
              community including business, education, and government sectors.
              We provide Software Engineering, Web Development, Mobile App
              Development, IT products and consultant, SaaS products, API
              development, Cloud Migration and Management, SEO marketing,
              Professional Training, and much more. Our goal is not to reinvent
              the wheel, we come up with innovative and new ideas that blow the
              current market.
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
          <Box maxWidth={500} width={1}>
            <Box
              component={'img'}
              src={
                'https://assets.maccarianagency.com/svg/illustrations/drawkit-illustration1.svg'
              }
              width={1}
              height={1}
              sx={{
                filter:
                  theme.palette.mode === 'dark' ? 'brightness(0.8)' : 'none',
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Story;
