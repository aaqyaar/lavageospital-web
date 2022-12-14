import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { alpha, useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';

import { NavItem, ObjectNavItem } from './components';

const Topbar = ({ onSidebarOpen, pages, colorInvert = false }) => {
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
    <Box
      display={'flex'}
      justifyContent={'space-between'}
      alignItems={'center'}
      width={1}
    >
      <Box
        display={'flex'}
        component="a"
        href="/"
        title="Lava Geospital"
        width={{ xs: 100, md: 120 }}
      >
        <Box
          component={'img'}
          src={"/lava-logo.png" }
          height={0.5}
          width={0.5}
        />
      </Box>
      <Box sx={{ display: { xs: 'none', md: 'flex' } }} alignItems={'center'}>
        <Box marginLeft={3}>
          <ObjectNavItem
            title={'Home'}
            id={'home'}
            item={HomePage}
            colorInvert={colorInvert}
          />
        </Box>
       
        <Box marginLeft={3}>
          <ObjectNavItem
            title={'Services'}
            id={'services'}
            item={ServicesPage}
            colorInvert={colorInvert}
          />
        </Box>

        <Box marginLeft={3}>
          <ObjectNavItem
            title={'Industries'}
            id={'industries'}
            item={IndustriesPage}
            colorInvert={colorInvert}
          />
        </Box>
        <Box marginLeft={3}>
          <ObjectNavItem
            title={'Blog'}
            id={'blog'}
            item={BlogPage}
            colorInvert={colorInvert}
          />
        </Box>
        <Box marginLeft={3}>
          <ObjectNavItem
            title={'About'}
            id={'about'}
            item={AboutPage}
            colorInvert={colorInvert}
          />
        </Box>
        <Box marginLeft={3}>
          <ObjectNavItem
            title={'Help'}
            id={'help'}
            item={HelpPage}
            colorInvert={colorInvert}
          />
        </Box>
      </Box>
      <Box sx={{ display: { xs: 'block', md: 'none' } }} alignItems={'center'}>
        <Button
          onClick={() => onSidebarOpen()}
          aria-label="Menu"
          variant={'outlined'}
          sx={{
            borderRadius: 2,
            minWidth: 'auto',
            padding: 1,
            borderColor: alpha(theme.palette.divider, 0.2),
          }}
        >
          <MenuIcon />
        </Button>
      </Box>
    </Box>
  );
};

Topbar.propTypes = {
  onSidebarOpen: PropTypes.func,
  pages: PropTypes.object,
  colorInvert: PropTypes.bool,
};

export default Topbar;
