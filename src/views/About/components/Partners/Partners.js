/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';

const mock = [
  'Bachelar Of Medicine',
  'Bachelar Of Medicine',
  'Masters Of Business Administration',
  'Masters Of Business Administration',
  'Master of Surgerical Administration',
];

const Partners = () => {
  const theme = useTheme();
  return (
    <Box>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Box>
            <Typography variant={'h4'} gutterBottom sx={{ fontWeight: 700 }}>
              All Of My Certifications
            </Typography>
            <Typography variant={'h6'} component={'p'} color={'text.secondary'}>
              We are registered as a distributor with AMFI,
              <br />
              investment advisor with SEBI and platform partners with BSE.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box>
            <Box display="flex" flexWrap="wrap" justifyContent={'flex-start'}>
              {mock.map((item, i) => (
                <Box
                  component={ListItem}
                  disableGutters
                  width={'auto'}
                  padding={0}
                >
                  <Box
                    component={ListItemAvatar}
                    minWidth={'auto !important'}
                    marginRight={1}
                    marginLeft={2}
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
              ))}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Partners;
