import Head from "next/head";
import React, { useEffect, useState } from "react";

// REALIZAR A IMPORTAÇÃO DO USEROUTER PARA RECEBER PARAMETROS PELA URL
// EXEMPLO DE URL:
// http://localhost:3000/auth/forgot/confirm/get?uid=MTA4&token=bfr0fn-7cf743d088e79b34b3c241e97a6db3d4
import { useRouter } from "next/router";
import { HeaderPlataforma } from "../../../src/components/Plataforma/HeaderPlataforma";
import { Footer } from "../../../src/components/Plataforma/Footer";
import { usePlataforma } from "../../../src/hooks/pages/usePlataforma";
import { Homenagem } from "../../../src/components/Homenagem/Body";

export default function Home() {
  const router = useRouter();
  const { id } = router.query;
  const { getHomenagemData, listaHomenagens } = usePlataforma();
  useEffect(() => {
    if (!router.isReady) return;
    getHomenagemData(Number(id));
    console.log("id: " + id);
  }, [router.isReady]);

  return (
    <>
      <Head>
        <title>Funetech - Homenagem</title>
        <link rel="shortcut icon" href="favicon.png" type="image/x-icon" />
      </Head>
      {/* <h1>ID: {id}</h1> */}
      <HeaderPlataforma href={"/plataforma/listar/"} texto={"Voltar"} />
      {/* {console.log('lista')}
      {console.log(listaHomenagens)} */}
      {/* <h1>HOMENAGEM DE ID {id}</h1> */}
      {router.isReady? <Homenagem homenagens={listaHomenagens} /> : <div>Loading...</div>}
      {/* {
        router.isReady ? (
          <h1>Loading..</h1>
          ) : (
          <h1>Loaded!!</h1>
          // <Homenagem homenagens={listaHomenagens} />
        )
      } */}
      <Footer />
    </>
  );
}

// {
//   router.isFallback ? (
//     // If we're still fetching data...
//     <div>Loading…</div>
//   ) : (
//     <>
//       {
//         filteredArticles
//           ? <ArticleGrid myArticles={filteredArticles} />
//           : <div>Your custom no data component... </div>
//       }
//     </>
//   )
// }
