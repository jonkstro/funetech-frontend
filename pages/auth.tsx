import Head from "next/head";
import { Body } from "../src/components/Auth/Body";
import { Footer } from "../src/components/Auth/Footer";
import { Header } from "../src/components/Auth/Header";

export default function Logar() {
    return (
        <>
            <Head>
                <title>FUNETECH - LOGAR</title>
                <link rel="shortcut icon" href="favicon.png" type="image/x-icon" />
            </Head>
            <Header/>
            <Body/>
            <Footer/>
        </>
    );
}