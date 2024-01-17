import React from 'react';
import { AppProps } from 'next/app';
import ProgressLine from '../components/ProgressLine';
import './app.less';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <ProgressLine />
      <Component {...pageProps} />
    </>
  );
};

export default App;
