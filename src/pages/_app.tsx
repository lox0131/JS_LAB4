import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'next-auth/client'
import { ChakraProvider } from '@chakra-ui/react'
import { MethodsProvider } from '../context/MethodContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <MethodsProvider>
      <Provider session={pageProps.session}>
        <Component {...pageProps} />
      </Provider>
      </MethodsProvider>
    </ChakraProvider>
  );
}

export default MyApp
