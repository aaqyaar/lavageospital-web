import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { alpha, useTheme } from '@mui/material/styles';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

let content = null;

const NavItem = ({ title, items }) => {
  const theme = useTheme();
  const [activeLink, setActiveLink] = useState('');
  useEffect(() => {
    setActiveLink(window && window.location ? window.location.pathname : '');
  }, []);

  if (Array.isArray(items) && items.length >= 1) {
    const hasActiveLink = () => items.find((i) => i.href === activeLink);

    content = (
      <Accordion
        disableGutters
        elevation={0}
        sx={{ backgroundColor: 'transparent' }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{ padding: 0 }}
        >
          <Typography
            fontWeight={hasActiveLink() ? 600 : 400}
            color={hasActiveLink() ? 'primary' : 'text.primary'}
          >
            {title}
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ padding: 0 }}>
          <Grid container spacing={1}>
            {items.map((p, i) => (
              <Grid item key={i} xs={12}>
                <Button
                  size={'large'}
                  component={'a'}
                  href={p.href}
                  sx={{
                    justifyContent: 'flex-start',
                    color:
                      activeLink === p.href
                        ? theme.palette.primary.main
                        : theme.palette.text.primary,
                    backgroundColor:
                      activeLink === p.href
                        ? alpha(theme.palette.primary.main, 0.1)
                        : 'transparent',
                    fontWeight: activeLink === p.href ? 600 : 400,
                  }}
                >
                  {p.title}
                  {p.isNew && (
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
              </Grid>
            ))}
          </Grid>
        </AccordionDetails>
      </Accordion>
    );
  } else {
    content = (
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Typography> Sidebar Nav Items </Typography>
        </Grid>
      </Grid>
    );
  }

  return <Box>{content}</Box>;
};

NavItem.propTypes = {
  items: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  onClose: PropTypes.func,
};

export default NavItem;
