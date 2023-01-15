import Head from "next/head";
import { Body } from "../../../src/components/Plataforma/Body";
import { Listar } from "../../../src/components/Plataforma/Body/Listar";
import { Footer } from "../../../src/components/Plataforma/Footer";
import { Header } from "../../../src/components/Plataforma/Header";
import { HeaderPlataforma } from "../../../src/components/Plataforma/HeaderPlataforma";
import { usePlataforma } from "../../../src/hooks/pages/usePlataforma";

export default function Home() {
  const { listarHomenagens, listaHomenagens } = usePlataforma();
  listarHomenagens();
  return (
    <>
      <Head>
        <title>FUNETECH - HOME</title>
        <link rel="shortcut icon" href="favicon.png" type="image/x-icon" />
      </Head>
      <HeaderPlataforma href={"/plataforma/"} texto={"Voltar"} />
      <Listar 
        homenagens={listaHomenagens}
      />
      <Footer />
    </>
  );
}
