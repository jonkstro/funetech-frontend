import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import { GlobalStyle } from "../src/styles/global";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
      <ToastContainer autoClose={1000} />
    </>
  );
}
