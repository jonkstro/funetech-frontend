import Head from "next/head";
import React from "react";
import { Header } from "../../../src/components/Auth/Header";
import { Footer } from "../../../src/components/Auth/Footer";
import { ForgotPass } from "../../../src/components/Auth/Body/ForgotPass";

export default function Home() {
  return (
    <>
      <Head>
        <title>FUNETECH - Alterar Senha</title>
        <link rel="shortcut icon" href="favicon.png" type="image/x-icon" />
      </Head>
      <Header />
      <ForgotPass />
      <Footer />
    </>
  );
}
