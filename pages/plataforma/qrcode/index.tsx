import Head from "next/head";
import { Body } from "../../../src/components/Plataforma/Body";
import { Footer } from "../../../src/components/Plataforma/Footer";
import { Header } from "../../../src/components/Plataforma/Header";

export default function Home() {
    return(
        <>
            <Head>
                <title>FUNETECH - HOME</title>
                <link rel="shortcut icon" href="favicon.png" type="image/x-icon" />
            </Head>
            <Header/>
            <Footer/>

        </>
    );
}