import Head from "next/head";
import React from "react";
import { Header } from "../../src/components/Auth/Header";
import { Body } from "../../src/components/Auth/Body";
import { Footer } from "../../src/components/Auth/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>FUNETECH - Logar</title>
        <link rel="shortcut icon" href="favicon.png" type="image/x-icon" />
      </Head>
      <Header />
      <Body />
      <Footer />
    </>
  );
}
