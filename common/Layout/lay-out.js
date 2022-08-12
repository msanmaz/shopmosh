import Head from 'next/head'
import NavBar from 'components/NavBar/Nav-Bar'
import Footer from '../footer/MainFooter'

export default function Layout({
  children,
  title = 'This is the default title',
}) {
  return (
    <>
      <Head>
        <title>RLVX | {title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
    <NavBar/>

      {children}

    <Footer/>
    </>
  )
}