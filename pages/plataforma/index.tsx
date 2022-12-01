import Head from "next/head";
import React from "react";
import { Header } from "../../src/components/Plataforma/Header";
import { Body } from "../../src/components/Plataforma/Body";
import { Footer } from "../../src/components/Plataforma/Footer";
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