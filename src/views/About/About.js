import React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';

import Main from 'layouts/Main';
import Container from 'components/Container';
import {
  Contact,
  Gallery,
  Hero,
  Partners,
  Story,
  Team,
  WhoWeAre,
  Application,
} from './components';

const About = ({ team }) => {
  return (
    <Main colorInvert={true}>
      <Hero />

      <Container>
        <Story />
      </Container>
      <Container paddingTop={'0 !important'}>
        <Gallery />
      </Container>
      <Container maxWidth={800} paddingY={'0 !important'}>
        <Divider />
      </Container>
      {/* <Container>
        <Team team={team} />
      </Container> */}

      <Container>
        <Partners />
      </Container>
      {/* <Container maxWidth={800} paddingTop={'0 !important'}>
        <Application />
      </Container> */}
    </Main>
  );
};

export default About;
