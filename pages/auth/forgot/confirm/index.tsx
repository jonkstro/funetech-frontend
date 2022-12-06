import Head from "next/head";
import React from "react";
import { Header } from "../../../../src/components/Auth/Header";
import { Footer } from "../../../../src/components/Auth/Footer";
import { FormForgotPass } from "../../../../src/components/Auth/Body/FormForgotPass";
export default function Home() {
    return (
        <>
            <Head>
                <title>FUNETECH - Alterar Senha</title>
                <link rel="shortcut icon" href="favicon.png" type="image/x-icon" />
            </Head>
            <Header />
            <FormForgotPass/>
            <Footer />
        </>
    );
}