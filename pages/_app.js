import "../styles/globals.css";
import { NextUIProvider } from "@nextui-org/react";
import { ContextWrapper } from "../_context/context";
import Layout from "../Components/Layout/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <NextUIProvider>
      <ContextWrapper>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ContextWrapper>
    </NextUIProvider>
  );
}

export default MyApp;
