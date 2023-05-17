import { useEffect, useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from 'utils/colorTheme';
import Spinner from 'components/Spinner/Spinner';
import Layout from 'layout/Layout/Layout';
import '@/styles/globals.css';

function App({ Component, pageProps }) {
  return (
    <Hydrated>
      <ThemeProvider theme={theme}>
        <Layout data={pageProps}>
          <Component {...pageProps} />
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
