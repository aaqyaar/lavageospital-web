import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { alpha, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

const Hero = ({ project }) => {
  const theme = useTheme();

  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  const isSm = useMediaQuery(theme.breakpoints.up('sm'), {
    defaultMatches: true,
  });

  return (
    <Grid container spacing={4}>
      <Grid item container xs={12} md={6} alignItems={'center'}>
        <Box data-aos={isMd ? 'fade-right' : 'fade-up'}>
          <Box marginBottom={2}>
            <Typography
              variant="h3"
              color="text.primary"
              sx={{ fontWeight: 700 }}
            >
              {project.title}
              <Typography
                color={'primary'}
                component={'span'}
                variant={'inherit'}
                ml={1}
                sx={{
                  background: `linear-gradient(180deg, transparent 82%, ${alpha(
                    theme.palette.secondary.main,
                    0.3,
                  )} 0%)`,
                }}
              >
                built with:
              </Typography>
            </Typography>
            <Box display="flex" flexWrap="wrap" justifyContent={'flex-start'}>
              {project.techStack.map((item, i) => (
                <Box maxWidth={90} marginTop={2} marginRight={3} key={i}>
                  <Box
                    component="img"
                    height={1}
                    width={1}
                    src={item.image}
                    alt={item.name}
                    sx={{
                      filter:
                        theme.palette.mode === 'dark'
                          ? 'brightness(0) invert(0.7)'
                          : 'none',
                    }}
                  />
                </Box>
              ))}
            </Box>
          </Box>
          <Box marginBottom={3}>
            <Typography variant="h6" component="p" color="text.secondary">
              The project contains {project.apps.length} Applications
            </Typography>
          </Box>

          <Box
            display="flex"
            flexDirection={{ xs: 'column', sm: 'row' }}
            alignItems={{ xs: 'stretched', sm: 'flex-start' }}
          >
            {project.apps.map((item, i) => (
              <Box key={i} mx={1}>
                <Button
                  href={item.href}
                  variant={item.variant}
                  color="primary"
                  target="_blank"
                  size="large"
                  fullWidth={isMd ? false : true}
                >
                  {item.name}
                </Button>
              </Box>
            ))}
          </Box>
        </Box>
      </Grid>
      <Grid
        item
        container
        alignItems={'center'}
        justifyContent={'center'}
        xs={12}
        md={6}
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        <Box
          component={LazyLoadImage}
          height={1}
          width={1}
          src={'https://assets.maccarianagency.com/screenshots/dashboard.png'}
          alt="..."
          effect="blur"
          boxShadow={3}
          borderRadius={2}
          maxWidth={600}
          sx={{
            filter: theme.palette.mode === 'dark' ? 'brightness(0.7)' : 'none',
          }}
        />
      </Grid>
    </Grid>
  );
};

export default Hero;
