import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

import Page from 'components/Page';

import 'react-lazy-load-image-component/src/effects/blur.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import 'react-image-lightbox/style.css';
import 'aos/dist/aos.css';

export default function App({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="keywords" content="IT & Software Company" />
        <meta name="keywords" content="Web Development" />
        <meta name="keywords" content="API" />
        <meta name="keywords" content="Cloud Engineering" />
        <meta name="keywords" content="IT products" />
        <title>Lava Geospital. Co</title>
      </Head>
      <Page>
        <Component {...pageProps} />
      </Page>
    </React.Fragment>
  );
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
