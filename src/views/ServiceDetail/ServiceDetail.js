import React from 'react';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { alpha, useTheme } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import { Icon } from '@iconify/react';
import bikeFast from '@iconify/icons-mdi/bike-fast';
import Main from 'layouts/Main';
import Container from 'components/Container';
import { useRouter } from 'next/router';
import { Advantages, Process, Feature, Benefits, Work } from './components';

const ServiceDetail = ({ services }) => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  const router = useRouter();
  const { id } = router.query;
  const currentService = services.find((service) => service.id === id);

  return (
    <Box sx={{ overflowX: 'hidden' }}>
      <Main bgcolor={'background.paper'}>
        <Container>
          <Advantages services={currentService?.services || []} />
        </Container>
        <Container>
          <Process process={currentService?.process || []} />
        </Container>
        <Container>
          <Feature numbers={currentService.numbers || []} />
        </Container>
        <Container>
          <Work />
        </Container>
        <Container>
          <Box
            marginTop={4}
            display={'flex'}
            justifyContent={{ xs: 'center', md: 'flex-start' }}
          >
            <Button
              component={Link}
              variant="contained"
              color="primary"
              size="large"
              href={'/'}
            >
              Back home
            </Button>
          </Box>
        </Container>
      </Main>
    </Box>
  );
};

export default ServiceDetail;
