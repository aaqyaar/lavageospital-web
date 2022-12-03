import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Main from 'layouts/Main';
import Container from 'components/Container';
import { Features, ProductsCard } from './components';
import ComingSoon from '../../pages/products/coming-soon';

const Products = ({ projects }) => {
  const theme = useTheme();

  return (
    <Main>
      <Box
        position={'relative'}
        sx={{
          backgroundColor: theme.palette.alternate.main,
          marginTop: -13,
          paddingTop: 13,
        }}
      >
        <Container>
          <Features />
        </Container>
      </Box>

      <Box
        position={'relative'}
        sx={{
          backgroundColor: theme.palette.alternate.main,
        }}
      >
        <Box>
          <Container>
            {projects.length > 0 ? (
              <ProductsCard projects={projects} />
            ) : (
              <ComingSoon />
            )}
          </Container>
        </Box>
      </Box>
    </Main>
  );
};

export default Products;
