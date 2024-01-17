import React, { useEffect } from 'react';
import { AppProps } from 'next/app';
import ProgressLine from '../components/ProgressLine';
import './app.less';
import useProductStore, { ProducStore } from '../store/productStore';

const App = ({ Component, pageProps }: AppProps) => {
  const [init] = useProductStore((s: ProducStore) => [s.init]);

  useEffect(() => {
    init();
  }, []);

  return (
    <>
      <ProgressLine />
      <Component {...pageProps} />
    </>
  );
};

export default App;
