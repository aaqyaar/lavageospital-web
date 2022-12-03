import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { alpha, useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

const NavItem = ({ id, item }) => {
  const theme = useTheme();

  const [activeLink, setActiveLink] = useState('');
  useEffect(() => {
    setActiveLink(window && window.location ? window.location.pathname : '');
  }, []);

  return (
    <Box>
      <Box
        display={'flex'}
        alignItems={'center'}
        aria-describedby={id}
        sx={{ cursor: 'pointer' }}
      >
        <Button
          component={'a'}
          href={item.href}
          sx={{
            justifyContent: 'flex-start',
            color:
              activeLink === item.href
                ? theme.palette.primary.main
                : theme.palette.text.primary,
            backgroundColor:
              activeLink === item.href
                ? alpha(theme.palette.primary.main, 0.1)
                : 'transparent',
            fontWeight: activeLink === item.href ? 600 : 400,
          }}
        >
          {item.title}
          {item.isNew && (
            <Box
              padding={0.5}
              display={'inline-flex'}
              borderRadius={1}
              bgcolor={'primary.main'}
              marginLeft={2}
            >
              <Typography
                variant={'caption'}
                sx={{ color: 'common.white', lineHeight: 1 }}
              >
                new
              </Typography>
            </Box>
          )}
        </Button>
      </Box>
    </Box>
  );
};

NavItem.propTypes = {
  id: PropTypes.string.isRequired,
  item: PropTypes.object.isRequired,
};

export default NavItem;
