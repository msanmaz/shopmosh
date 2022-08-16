import Hero from 'components/Hero'
import React from 'react'
import Layout from '../common/Layout/lay-out'
import Head from 'next/head'
export default function Home() {

  return (
    <>
      <Head>        <title>RLVX | HOME</title>
      </Head>
      <Hero />
    </>
  )
}

Home.getLayout = (page) => {
  return <Layout>{page}</Layout>
}
