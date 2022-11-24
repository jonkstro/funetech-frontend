import type { AppProps } from 'next/app'
import { GlobalStyle } from '../src/styles/global'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
    )
}
