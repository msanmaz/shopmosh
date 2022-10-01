import Hero from 'components/Hero'
import React from 'react'
import Layout from '../common/Layout/lay-out'
import Head from 'next/head'
import HeroSecond from '../components/He-ro'
import SlideGallery from '../components/SlideGallery/slide-gallery'
import { readCache } from 'lib/cache'
import Banner from '../components/Banner/ban-ner'


export default function Home({cache}) {

  return (
    <>
          <Head>
        <title>MOSH | HOME</title>
      </Head>
      <HeroSecond/>
      <SlideGallery products={cache}/>
      <Banner/>
    </>
  )
}

Home.getLayout = (page) => {
  return <Layout>{page}</Layout>
}


export async function getServerSideProps() {
  const cache = await readCache()

  return {
      props: {
          cache,
      }
  }
}
