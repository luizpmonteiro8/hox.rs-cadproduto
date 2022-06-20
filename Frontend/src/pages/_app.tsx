import { PageThemeProvider } from '../contexts/ThemeContext';
import { AppProps } from 'next/app';
import { SessionProvider as NextAuthProvider } from 'next-auth/react';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux';
import storeConfig from 'store/storeConfig';
import { GlobalStyles } from 'styles/global-styles';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextAuthProvider session={pageProps.session}>
      <Provider store={storeConfig}>
        <PageThemeProvider>
          <Component {...pageProps} />
          <GlobalStyles />
        </PageThemeProvider>
      </Provider>
    </NextAuthProvider>
  );
}

export default MyApp;
