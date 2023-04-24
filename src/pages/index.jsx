import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'

export default function Home() {
  return (
    <>
      <Head>
        <title>tinybox - Neighbourhood Intelligence.</title>
        <meta
          name="description"
          content="Take the guesswork out of finding the right neighbourhood."
        />
      </Head>
      <Header />
      <main>
        <Hero />
        <PrimaryFeatures />
      </main>
      <Footer />
    </>
  )
}
