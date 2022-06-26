import "../styles/globals.css";
import type { AppProps } from "next/app";
import { MoralisProvider } from "react-moralis";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <MoralisProvider
        serverUrl="https://lznfuhex1lqb.usemoralis.com:2053/server"
        appId="LRic9DDI2FTI3eOPxHbZMvfAz0KBXMAPZeGyumTr"
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MoralisProvider>
    </ChakraProvider>
  );
}

export default MyApp;
