import Head from 'next/head'
import NavBar from 'components/NavBar/Nav-Bar'
import Footer from '../footer/MainFooter'

export default function Layout({
  children,
  title = 'HOME',
}) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
    <NavBar/>

      {children}

    <Footer/>
    </>
  )
}