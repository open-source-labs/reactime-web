import '../styles/globals.css';
import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import Head from 'next/head';
import favicon from '../public/favicon.ico';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
      <Head>
        <link rel="shortcut icon" href={favicon.src} type="image/x-icon" />
      </Head>
    </>
  );
}

export default MyApp;
