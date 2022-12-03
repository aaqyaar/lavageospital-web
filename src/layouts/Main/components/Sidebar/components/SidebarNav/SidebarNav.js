import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';

import { NavItem, ObjectNavItem } from './components';

const SidebarNav = ({ pages }) => {
  const theme = useTheme();
  const { mode } = theme.palette;

  const {
    services:ServicesPage,
    industries:IndustriesPage,
    about: AboutPage,
    help: HelpPage,
    home: HomePage,
    blog: BlogPage,
  } = pages;

  return (
    <Box>
      <Box width={1} paddingX={2} paddingY={1}>
        <Box
          display={'flex'}
          component="a"
          href="/"
          title="theFront"
          width={{ xs: 100, md: 120 }}
        >
          <Box
            component={'img'}
            src={"/lava-logo.png"}
            height={1}
            width={0.5}
          />
        </Box>
      </Box>
      <Box paddingX={2} paddingY={2}>
        <Box>
          <ObjectNavItem title={'home'} item={HomePage} />
        </Box>

      
        <Box>
          <ObjectNavItem title={'Services'} item={ServicesPage} />
        </Box>
        <Box>
          <ObjectNavItem title={'Industries'} item={IndustriesPage} />
        </Box>
        <Box>
          <ObjectNavItem title={'Blog'} item={BlogPage} />
        </Box>
        <Box>
          <ObjectNavItem title={'About'} item={AboutPage} />
        </Box>
        <Box>
          <ObjectNavItem title={'Help'} item={HelpPage} />
        </Box>
      </Box>
    </Box>
  );
};

SidebarNav.propTypes = {
  pages: PropTypes.object.isRequired,
};

export default SidebarNav;
