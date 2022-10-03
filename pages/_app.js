import Layout from "../components/layout";
import "../styles/globals.css";
import ScrollObserver from "../utils/scroll-observer";
import SizeObserver from "../utils/size-observer";

function MyApp({ Component, pageProps }) {
  return (
    <SizeObserver>
      <ScrollObserver>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ScrollObserver>
    </SizeObserver>
  );
}

export default MyApp;
