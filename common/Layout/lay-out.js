import Head from 'next/head'
import NavBar from 'components/NavBar/Nav-Bar'
import Footer from '../footer/MainFooter'

export default function Layout({
  children,

}) {
  return (
    <>
    <NavBar/>

      {children}

    <Footer/>
    </>
  )
}