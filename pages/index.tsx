import Head from 'next/head'
import Image from 'next/image'
import { Body } from '../src/components/Home/Body'
import { Footer } from '../src/components/Home/Footer'
import { Header } from '../src/components/Home/Header'

export default function Home() {
  return (
    <>
      <Head>
        <title>FUNETECH - HOME</title>
        <link rel="shortcut icon" href="favicon.png" type="image/x-icon" />
      </Head>
      <Header />
      <Body />
      <Footer />
    </>
  )
}
