/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Link } from 'next/link';
import roundShoppingCart from '@iconify/icons-ic/round-shopping-cart';
import roundMenuBook from '@iconify/icons-ic/round-menu-book';
import roundCardTravel from '@iconify/icons-ic/round-card-travel';
import roundInventory from '@iconify/icons-ic/round-inventory';
import ComingSoon from 'pages/products/coming-soon';

import { Icon } from '@iconify/react';

const icons = {
  roundShoppingCart,
  roundMenuBook,
  roundCardTravel,
  roundInventory,
};

const findTheIcon = (name) => {
  return <Icon icon={icons[name]} width={50} height={50} />;
};

const Projects = ({ projects }) => {
  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          variant={'h4'}
          gutterBottom
          align={'center'}
          sx={{ fontWeight: 700 }}
        >
          Our Projects
        </Typography>
        <Typography
          variant={'h6'}
          component={'p'}
          color={'text.secondary'}
          align={'center'}
        >
          See Our Latest Projects.
        </Typography>
      </Box>
      <Box>
        <Grid container spacing={4}>
          {projects.map((item, i) => (
            <Grid item xs={12} md={4} key={i}>
              <Box
                data-aos={'fade-up'}
                data-aos-delay={i * 100}
                data-aos-offset={100}
                data-aos-duration={600}
                height={1}
              >
                <Box
                  component={Card}
                  variant={'outlined'}
                  height={1}
                  padding={3}
                  sx={{
                    transition: 'all .2s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: 2,
                    },
                  }}
                >
                  <CardContent>
                    <Box>
                      <Box marginBottom={2} color={'secondary.main'}>
                        {findTheIcon(item.icon)}
                      </Box>
                      <Typography
                        variant={'h5'}
                        gutterBottom
                        sx={{ fontWeight: 700 }}
                      >
                        {item.title}
                      </Typography>
                      <Typography color="text.secondary">
                        {item.subtitle}
                      </Typography>
                    </Box>
                    <Box marginTop={2}>
                      <Button
                        href={`/products/${item.id}`}
                        variant="contained"
                        color="primary"
                        size="large"
                        endIcon={
                          <svg
                            width={16}
                            height={16}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                          </svg>
                        }
                      >
                        Learn More
                      </Button>
                    </Box>
                  </CardContent>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Projects;
