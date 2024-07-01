import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import '../styles/globals.css';
config.autoAddCss = false;

import type { AppProps } from 'next/app';
import { Poppins } from 'next/font/google';
import Layout from '../components/Layout';

const poppins = Poppins({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={poppins.className}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
