import Layout from "../components/layout";
import "../styles/globals.css";
import ScrollObserver from "../utils/scroll-observer";
import SizeObserver from "../utils/size-observer";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Banquee</title>
      </Head>
      <SizeObserver>
        <ScrollObserver>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ScrollObserver>
      </SizeObserver>
    </>
  );
}

export default MyApp;
