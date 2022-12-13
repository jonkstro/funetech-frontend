import Head from "next/head";
import { Footer } from "../../../src/components/Plataforma/Footer";
import { HeaderPlataforma } from "../../../src/components/Plataforma/HeaderPlataforma";

export default function Home() {
  return (
    <>
      <Head>
        <title>FUNETECH - HOME</title>
        <link rel="shortcut icon" href="favicon.png" type="image/x-icon" />
      </Head>
      <HeaderPlataforma href={"/plataforma/"} texto={"Voltar"} />      
      <Footer />
    </>
  );
}
