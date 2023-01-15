import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { ActivateUser } from "../../../src/components/Auth/Body/ActivateUser";
import { Footer } from "../../../src/components/Auth/Footer";
import { Header } from "../../../src/components/Auth/Header";
import { useAuth } from "../../../src/hooks/pages/useAuth";

export default function Home() {
  const router = useRouter();
  const { index } = router.query;
  const { uid } = router.query;
  const { token } = router.query;

  return (
    <>
      <Head>
        <title>FUNETECH - Alterar Senha</title>
        <link rel="shortcut icon" href="favicon.png" type="image/x-icon" />
      </Head>
      <Header />
      <ActivateUser uid={String(uid)} token={String(token)} />
      <Footer />
    </>
  );
}
