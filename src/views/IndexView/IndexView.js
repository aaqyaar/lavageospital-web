import React from 'react';
import {  useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Main from 'layouts/Main';
import Container from 'components/Container';
import { Features, Reviews, Partners, Contact, Hero } from './components';

const IndexView = () => {
  const theme = useTheme();
  return (
    <Box sx={{ overflowX: 'hidden' }}>
      <Main bgcolor={'background.paper'}>
        <Container>
          <Hero />
        </Container>
        <Container>
          <Features />
        </Container>
        <Box bgcolor={'alternate.main'}>
          <Container>
            <Reviews />
          </Container>
        </Box>
        <Box marginTop={5}>
          <Container maxWidth={1} paddingTop={'0 !important'}>
            <Partners />
          </Container>
        </Box>
      </Main>
    </Box>
  );
};

export default IndexView;
