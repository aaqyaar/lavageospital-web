/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import { useTheme } from '@mui/material/styles';
import { Icon } from '@iconify/react';
import reactIcon from '@iconify/icons-mdi/react';
import flashAlertOutline from '@iconify/icons-mdi/flash-alert-outline';
import tabletCellphone from '@iconify/icons-mdi/tablet-cellphone';
import webIcon from '@iconify/icons-mdi/web';
import earthArrowRight from '@iconify/icons-mdi/earth-arrow-right';
import serverIcon from '@iconify/icons-mdi/server';
import testTube from '@iconify/icons-mdi/test-tube';
import domainIcon from '@iconify/icons-mdi/domain';
import weatherCloudyArrowRight from '@iconify/icons-mdi/weather-cloudy-arrow-right';
import desktopTower from '@iconify/icons-mdi/desktop-tower';
import cogOutline from '@iconify/icons-mdi/cog-outline';
const icons = {
  reactIcon,
  flashAlertOutline,
  tabletCellphone,
  webIcon,
  earthArrowRight,
  serverIcon,
  testTube,
  domainIcon,
  weatherCloudyArrowRight,
  desktopTower,
  cogOutline,
};

const findTheIcon = (name) => {
  return <Icon icon={icons[name]} width={60} height={60} />;
};

const Advantages = ({ services }) => {
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
          Why choose Silicon as your software partner?
        </Typography>
        <Typography
          variant="h4"
          align={'center'}
          data-aos={'fade-up'}
          gutterBottom
          sx={{
            fontWeight: 700,
          }}
        >
          Creating remarkable opportunities for companies to exhibit their
          services and products online.
        </Typography>
        <Typography
          variant="h6"
          align={'center'}
          color={'text.secondary'}
          data-aos={'fade-up'}
        >
          Our mission is to help you grow your business, meet and connect with
          people who share your passions.
          <br />
          We help you fulfill your best potential through engaging Software and
          Applications
        </Typography>
      </Box>
      <Grid container spacing={4}>
        {services.map((item, i) => (
          <Grid key={i} item xs={12} md={3}>
            <ListItem
              component="div"
              disableGutters
              data-aos={'fade-up'}
              data-aos-delay={i * 100}
              data-aos-offset={100}
              data-aos-duration={600}
              sx={{
                flexDirection: 'column',
                alignItems: 'flex-start',
                padding: 0,
              }}
            >
              <Box
                component={ListItemAvatar}
                marginBottom={1}
                minWidth={'auto !important'}
              >
                <Box color={theme.palette.primary.main}>
                  {findTheIcon(item.icon)}
                </Box>
              </Box>
              <ListItemText
                primary={item.title}
                secondary={item.subtitle}
                primaryTypographyProps={{
                  variant: 'h6',
                  gutterBottom: true,
                  align: 'left',
                }}
                secondaryTypographyProps={{ align: 'left' }}
                sx={{
                  '& .MuiListItemText-primary': {
                    fontWeight: 700,
                  },
                  margin: 0,
                }}
              />
            </ListItem>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Advantages;
