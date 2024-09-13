import { useEffect, useState } from 'react';
import { GoogleAnalytics } from '@next/third-parties/google';
import { ThemeProvider } from '@mui/material/styles';

import { theme } from 'utils/colorTheme';

import Spinner from 'components/Spinner/Spinner';
import Layout from 'layout/Layout/Layout';

import '@/styles/globals.css';

function App({ Component, pageProps }) {
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <Hydrated>
      <ThemeProvider theme={theme}>
        <Layout data={pageProps}>
          <Component {...pageProps} />

          <GoogleAnalytics gaId={GA_ID} />
        </Layout>
      </ThemeProvider>
    </Hydrated>
  );
}

const Hydrated = ({ children }) => {
  const [hydration, setHydration] = useState(false);

  useEffect(() => {
    setHydration(true);
  }, []);

  return hydration ? children : <Spinner />;
};

export default App;
