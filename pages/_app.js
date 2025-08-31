import "@/styles/globals.css";

import Head from "next/head";
import Layout from "../components/Layout";
import Script from 'next/script';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Portfolio (NG ZHI YAO)</title>
        <meta name="description" content="Portfolio (NG ZHI YAO)" />
        <meta name="keywords" content="ngzhiyao,portfolio,nextjs,typescript"></meta>
        <meta name="author" content="NG ZHI YAO"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge"></meta>
        <link rel="icon" href="/portfolio.ico" />
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
