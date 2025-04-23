import "@/styles/globals.css";

import Head from "next/head";
import Layout from "../components/Layout";
import Script from 'next/script';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />


      </Head>
              {/* Font Awesome API */}
      <Script
        src="https://kit.fontawesome.com/19c105383f.js"
        crossOrigin="anonymous"
        strategy="afterInteractive"
      />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
