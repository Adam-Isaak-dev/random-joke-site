import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { CacheProvider } from '@emotion/react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import createEmotionCache from '../utility/createEmotionCache';
import theme from '../styles/theme/theme';
import '../styles/globals.css';
import TopBar from '../components/TopBar';
import BottomBar from '../components/BottomBar';

const clientSideEmotionCache = createEmotionCache();


const MyApp = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Head>
          <title>Random Dad Joke&apos;s</title>
          <meta charset="utf-8" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link rel="apple-touch-icon" sizes="240x240" href="/icon-240.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/icon-32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/icon-16.png" />
          <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        </Head>
        <TopBar />
        <Component {...pageProps} />
        <BottomBar />
      </ThemeProvider>
    </CacheProvider>
  );
};

export default MyApp;

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};