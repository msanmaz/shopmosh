import Hero from 'components/Hero'
import React from 'react'
import { useContext } from 'react'
import { CartContext } from 'context/shopContext'
import Layout from '../common/Layout/lay-out'
import { useRouter } from 'next/router'
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
  return <Layout title={'HOME'}>{page}</Layout>
}
