import React, { useState } from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const mock = [
  {
    title: 300,
    subtitle: '300 + Operations Completed.',
    suffix: '+',
  },
  {
    title: 45,
    subtitle: '45 + Successfull Students.',
    suffix: '+',
  },
  {
    title: 99,
    subtitle: '99% Our Courses is best for students.',
    suffix: '%',
  },
];

const Features = () => {
  const theme = useTheme();
  const { mode } = theme.palette;
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const [viewPortEntered, setViewPortEntered] = useState(false);
  const setViewPortVisibility = (isVisible) => {
    if (viewPortEntered) {
      return;
    }

    setViewPortEntered(isVisible);
  };

  return (
    <Box>
      <Grid container spacing={4} direction={isMd ? 'row' : 'column-reverse'}>
        <Grid item xs={12} md={6} data-aos={isMd ? 'fade-right' : 'fade-up'}>
          <Box marginBottom={4}>
            <Typography variant={'h4'} gutterBottom sx={{ fontWeight: 700 }}>
              Some of My Works.
            </Typography>
            <Typography component={'p'} color={'text.secondary'}>
              You have a business to run. Stop worring about cross-browser bugs,
              designing new pages, keeping your components up to date. Let us do
              that for you.
            </Typography>
          </Box>
          <Box>
            <Grid container spacing={2}>
              {mock.map((item, i) => (
                <Grid key={i} item xs={12} md={4}>
                  <Typography variant="h4" color={'primary'} gutterBottom>
                    <Box fontWeight={600}>
                      <VisibilitySensor
                        onChange={(isVisible) =>
                          setViewPortVisibility(isVisible)
                        }
                        delayedCall
                      >
                        <CountUp
                          duration={2}
                          end={viewPortEntered ? item.title : 0}
                          start={0}
                          suffix={item.suffix}
                        />
                      </VisibilitySensor>
                    </Box>
                  </Typography>
                  <Typography component="p">{item.subtitle}</Typography>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Grid>
        <Grid item container justifyContent={'center'} xs={12} md={6}>
          <Box height={1} width={1} maxHeight={800}>
            <Box
              component={LazyLoadImage}
              effect="blur"
              src={
                'https://visionhospitalgoa.com/wp-content/uploads/2022/04/GENERAL-SURGERY.png'
              }
              height={{ xs: 'auto', md: 1 }}
              maxHeight={{ xs: 300, md: 1 }}
              width={1}
              maxWidth={1}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Features;
