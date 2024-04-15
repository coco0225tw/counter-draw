import type { AppProps } from 'next/app';
import Head from 'next/head';
import { GlobalStyle } from '@/styles/global';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Countdown Draw</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <GlobalStyle />
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}
