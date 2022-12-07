import Head from "next/head";
import React from "react";
import { Header } from "../../../../src/components/Auth/Header";
import { Footer } from "../../../../src/components/Auth/Footer";
import { FormForgotPass } from "../../../../src/components/Auth/Body/FormForgotPass";

// REALIZAR A IMPORTAÇÃO DO USEROUTER PARA RECEBER PARAMETROS PELA URL
// EXEMPLO DE URL: 
// http://localhost:3000/auth/forgot/confirm/get?uid=MTA4&token=bfr0fn-7cf743d088e79b34b3c241e97a6db3d4
import { useRouter } from "next/router";

export default function Home() {
    const router = useRouter();
    const { index } = router.query
    const { uid } = router.query
    const { token } = router.query
    console.log("TOKEN: "+token);
    console.log("UID: "+uid);
    return (
        <>
            <Head>
                <title>FUNETECH - Alterar Senha</title>
                <link rel="shortcut icon" href="favicon.png" type="image/x-icon" />
            </Head>
            <Header />
            <FormForgotPass
                uid = {String(uid)}
                token = {String(token)}
                />
            <Footer />
        </>
    );
}