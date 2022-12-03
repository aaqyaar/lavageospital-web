import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const mock = [
  {
    title: 'Discuss Requirements',
    subtitle: 'We try to understand our customer need in detail',
  },
  {
    title: 'Research the solution',
    subtitle:
      "We spent a lot of time researching and investigating the best solutions we can offer and fits well with the client's need",
  },
  {
    title: 'Solution proposal',
    subtitle:
      'We prepare and send our proposal to our clients so they can see and approve',
  },
  {
    title: 'Sign the contract',
    subtitle:
      'we sign the contract stating when and how our service will be delivered and how much will the client pay',
  },
  {
    title: 'Plan Execution',
    subtitle:
      'We plan our execution process and roadmap in detail so we do not miss our deadlines',
  },
  {
    title: 'Execute & Update',
    subtitle: 'We keep our client updated during our execution process',
  },
  {
    title: 'Deliver the project',
    subtitle: 'Done! but not the end...',
  },
  {
    title: 'Maintenance',
    subtitle:
      'We do not leave our client right there, we keep maintaining and developing the project',
  },
];

const Steps = () => {
  const theme = useTheme();

  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          variant={'h4'}
          gutterBottom
          align={'center'}
          sx={{ fontWeight: 700 }}
        >
          Our process for a high quality service
        </Typography>
        <Typography
          variant={'h6'}
          component={'p'}
          color={'text.secondary'}
          align={'center'}
        >
          We follow well designed and structured process to acheive our goal and
          customer satisfaction
        </Typography>
      </Box>
      <Grid container spacing={4}>
        {mock.map((item, i) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            key={i}
            data-aos={'fade-up'}
            data-aos-delay={i * 100}
            data-aos-offset={100}
            data-aos-duration={600}
          >
            <Box display={'flex'} flexDirection={'column'}>
              <Box display={'flex'} alignItems={'center'} marginBottom={1}>
                <Box
                  borderRadius={'100%'}
                  bgcolor={'secondary.main'}
                  marginRight={2}
                  width={40}
                  height={40}
                  display={'flex'}
                  justifyContent={'center'}
                  alignItems={'center'}
                >
                  <Typography
                    variant={'h6'}
                    sx={{ fontWeight: 600, color: theme.palette.common.white }}
                  >
                    ?
                  </Typography>
                </Box>
                <Typography variant={'h6'} gutterBottom fontWeight={500}>
                  {item.title}
                </Typography>
              </Box>
              <Typography color="text.secondary">{item.subtitle}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Steps;
