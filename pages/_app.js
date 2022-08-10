import  { MobileMenuProvider } from "../context/mobile-menu-context"
import { CartDropdownProvider } from "../context/cart-dropdown-context"
import ShopProvider from '../context/shopContext'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <ShopProvider><CartDropdownProvider><MobileMenuProvider><Component {...pageProps} /> </MobileMenuProvider></CartDropdownProvider></ShopProvider> 
}

export default MyApp
