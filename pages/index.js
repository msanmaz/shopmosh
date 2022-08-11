import Hero from 'components/Hero'
import React from 'react'
import { useContext } from 'react'
import { CartContext } from 'context/shopContext'
import Layout from '../common/Layout/lay-out'
export default function Home() {

  return (
    <>
      <Hero />
    </>
  )
}

Home.getLayout = (page) => {
  return <Layout title={'HOME'}>{page}</Layout>
}
