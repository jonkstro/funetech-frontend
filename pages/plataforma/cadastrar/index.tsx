import Head from "next/head";
import { Body } from "../../../src/components/Plataforma/Body";
import { Cadastrar } from "../../../src/components/Plataforma/Body/Cadastrar";
import { Footer } from "../../../src/components/Plataforma/Footer";
import { Header } from "../../../src/components/Plataforma/Header";
import { HeaderPlataforma } from "../../../src/components/Plataforma/HeaderPlataforma";

export default function Home() {
  return (
    <>
      <Head>
        <title>FUNETECH - HOME</title>
        <link rel="shortcut icon" href="favicon.png" type="image/x-icon" />
      </Head>
      <HeaderPlataforma href={"/plataforma/"} texto={"Voltar"} />
      <Cadastrar />
      <Footer />
    </>
  );
}
