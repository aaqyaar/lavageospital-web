import React from 'react';
import Box from '@mui/material/Box';
import Main from 'layouts/Main';
import Container from 'components/Container';
import { Main as MainSection } from './Docs';

const Documentation = () => {
  return (
    <Main>
      <Container>
        <MainSection />
      </Container>
    </Main>
  );
};

export default Documentation;
