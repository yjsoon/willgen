import "../styles/globals.css";
import AppContext from "../contexts/AppContext";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <AppContext>
        <Component {...pageProps} />
      </AppContext>
    </Layout>
  );
}

export default MyApp;
