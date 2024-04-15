import type { AppProps } from 'next/app';
import Head from 'next/head';
import { GlobalStyle } from '@/styles/global';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Countdown Draw</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
