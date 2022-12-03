/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Icon } from '@iconify/react';

import humanMaleBoard from '@iconify/icons-mdi/human-male-board';
import accountConvert from '@iconify/icons-mdi/account-convert';
import autoFix from '@iconify/icons-mdi/auto-fix';

const icons = {
  humanMaleBoard,
  accountConvert,
  autoFix,
};

const findTheIcon = (name) => {
  return <Icon icon={icons[name]} width={60} height={60} />;
};

const Process = ({ process }) => {
  const theme = useTheme();
  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          sx={{
            textTransform: 'uppercase',
            fontWeight: 'medium',
          }}
          gutterBottom
          color={'secondary'}
          align={'center'}
        >
          Process
        </Typography>
        <Typography
          variant={'h4'}
          gutterBottom
          align={'center'}
          sx={{ fontWeight: 700 }}
        >
          Our process to a high quality service is fast
        </Typography>
      </Box>
      <Box>
        <Grid container spacing={4}>
          {process.map((item, i) => (
            <Grid item xs={12} md={4} key={i}>
              <Box
                display={'flex'}
                flexDirection={'column'}
                data-aos={'fade-up'}
                data-aos-delay={i * 100}
                data-aos-offset={100}
                data-aos-duration={600}
              >
                <Box
                  component={Avatar}
                  width={80}
                  height={80}
                  marginBottom={2}
                  bgcolor={alpha(theme.palette.primary.main, 0.1)}
                  color={theme.palette.primary.main}
                  variant={'rounded'}
                  borderRadius={2}
                >
                  {findTheIcon(item.icon)}
                </Box>
                <Typography
                  variant={'h5'}
                  gutterBottom
                  sx={{ fontWeight: 700 }}
                >
                  {item.title}
                </Typography>
                <Typography color="text.secondary">{item.subtitle}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Process;
