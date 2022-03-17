import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import { MetaMaskProvider } from "metamask-react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MetaMaskProvider>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </MetaMaskProvider>
  );
}

export default MyApp;
