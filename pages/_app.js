import "@/styles/globals.css";
// import "@fortawesome/fontawesome-svg-core/styles.css";
// import { config } from "@fortawesome/fontawesome-svg-core";
// config.autoAddCss = false;

import Head from "next/head";
import Layout from "../components/Layout";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Font Awesome API */}
        <script
          src="https://kit.fontawesome.com/19c105383f.js"
          crossorigin="anonymous"
          async
        ></script>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
