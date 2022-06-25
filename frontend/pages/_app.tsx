// import "../styles/globals.css";
import type { AppProps } from "next/app";
import { MoralisProvider } from "react-moralis";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MoralisProvider
      serverUrl="https://lznfuhex1lqb.usemoralis.com:2053/server"
      appId="LRic9DDI2FTI3eOPxHbZMvfAz0KBXMAPZeGyumTr"
    >
      <Component {...pageProps} />
    </MoralisProvider>
  );
}

export default MyApp;
