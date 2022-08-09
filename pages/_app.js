import  { MobileMenuProvider } from "../context/mobile-menu-context"

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <MobileMenuProvider> <Component {...pageProps} /> </MobileMenuProvider>
}

export default MyApp
