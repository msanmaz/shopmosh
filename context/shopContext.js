import { createContext, useState, useEffect } from 'react'
import { createCheckout, getCustomerInfo, updateCheckout } from '../lib/shopify'

const CartContext = createContext()

export default function ShopProvider({ children }) {
  const [cart, setCart] = useState([])
  const [cartOpen, setCartOpen] = useState(false)
  const [checkoutId, setCheckoutId] = useState('')
  const [checkoutUrl, setCheckoutUrl] = useState('')
  const [drawer, setDrawer] = useState(false)
  const [customerInfo, setCustomerInfo] = useState(() => {
    if (typeof window !== 'undefined') {
      const stickyValue = window.localStorage.getItem('customer');

      return stickyValue !== null
        ? JSON.parse(stickyValue)
        : '';
    }
  });
  const [wishList, setWishList] = useState(() => {
    if (typeof window !== 'undefined') {
      return JSON.parse(window.localStorage.getItem('likes')) || { items: [] }
    }
  });
  const [accessToken, SetAccessToken] = useState(() => {
    if (typeof window !== 'undefined') {
      const stickyValue = window.localStorage.getItem('user');

      return stickyValue !== null
        ? JSON.parse(stickyValue)
        : '';
    }
  });


  useEffect(() => {
    if (localStorage.checkout_id) {
      const cartObject = JSON.parse(localStorage.checkout_id)
      if (cartObject[0].variantId) {
        setCart([cartObject[0]])
      } else if (cartObject[0].length > 0) {
        setCart(...[cartObject[0]])
      }

      setCheckoutId(cartObject[1].id)
      setCheckoutUrl(cartObject[1].webUrl)
    }

  }, [])

  




  async function addToCart(newItem) {
    setCartOpen(true)

    if (cart.length === 0) {
      setCart([newItem])

      const checkout = await createCheckout(newItem.variantId, newItem.variantQuantity)

      setCheckoutId(checkout.id)
      setCheckoutUrl(checkout.webUrl)

      localStorage.setItem("checkout_id", JSON.stringify([newItem, checkout]))
    } else {
      let newCart = []
      let added = false

      cart.map(item => {
        if (item.id === newItem.variantId) {
          item.variantQuantity++
          newCart = [...cart]
          added = true
        }
      })

      if (!added) {
        newCart = [...cart, newItem]
      }

      setCart(newCart)
      const newCheckout = await updateCheckout(checkoutId, newCart)


      localStorage.setItem("checkout_id", JSON.stringify([newCart, newCheckout]))
    }
  }

  async function removeCartItem(itemToRemove) {
    const updatedCart = cart.filter(item => item.id !== itemToRemove)
    setCart(updatedCart)

    const newCheckout = await updateCheckout(checkoutId, updatedCart)

    localStorage.setItem("checkout_id", JSON.stringify([updatedCart, newCheckout]))

    if (cart.length === 1) {
      setCartOpen(false)
    }
  }


  return (
    <CartContext.Provider value={{
      cart,
      cartOpen,
      setCartOpen,
      addToCart,
      checkoutUrl,
      removeCartItem,
      setDrawer,
      drawer,
      wishList,
      setWishList,
      accessToken,
      SetAccessToken,
      customerInfo,
      setCustomerInfo
    }}>
      {children}
    </CartContext.Provider>
  )
}

const ShopConsumer = CartContext.Consumer

export { ShopConsumer, CartContext }