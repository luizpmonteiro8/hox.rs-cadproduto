import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';
import { AppProps } from 'next/app';
import { SessionProvider as NextAuthProvider } from 'next-auth/react';
import { GlobalStyles } from '../styles/global-styles';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux';
import storeConfig from 'store/storeConfig';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextAuthProvider session={pageProps.session}>
      <Provider store={storeConfig}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
          <GlobalStyles />
        </ThemeProvider>
      </Provider>
    </NextAuthProvider>
  );
}

export default MyApp;
