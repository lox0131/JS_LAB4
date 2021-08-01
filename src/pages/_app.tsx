import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'next-auth/client'
import { ChakraProvider, theme } from '@chakra-ui/react'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Provider session={pageProps.session}>
        <Component {...pageProps} />
      </Provider>
    </ChakraProvider>
  );
}
export default MyApp
