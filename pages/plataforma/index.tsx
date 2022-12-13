import Head from "next/head";
import React from "react";
import { Body } from "../../src/components/Plataforma/Body";
import { Footer } from "../../src/components/Plataforma/Footer";
import { Header } from "../../src/components/Plataforma/Header";
import { HeaderPlataforma } from "../../src/components/Plataforma/HeaderPlataforma";

export default function Home() {
  return (
    <>
      <Head>
        <title>FUNETECH - Página Inicial</title>
        <link rel="shortcut icon" href="favicon.png" type="image/x-icon" />
      </Head>
      <Header />
      <Body />
      <Footer />
    </>
  );
}
