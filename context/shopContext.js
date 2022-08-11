import { createContext, useState, useEffect } from 'react'
import { updateShopifyCheckout } from '../lib/helpers'
import { createCheckout, updateCheckout,getCollection, getCustomerInfo } from '../lib/shopify'
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

  const [collection,setCollection] = useState()


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

  useEffect(() => {
    const fetchCats = async () => {
      const collection = await getCollection()
      setCollection(collection)
    }
    fetchCats()

  }, [])

  
 async function getCustInfo(aToken){
  if(aToken){
    const data = await getCustomerInfo(aToken)
    localStorage.setItem("customer", JSON.stringify([data]))
  }
 }



  async function addToCart(newItem) {

    if (cart.length === 0) {
      setCart([...cart,newItem])
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

  async function updateCartItemQuantity(quantity,id ) {
    let newQuantity = Math.floor(quantity)
    if (quantity === '') {
      newQuantity = ''
    }
    let newCart = [...cart]
    newCart.forEach(item => {
      if (item.variantId === id) {
        item.variantQuantity = newQuantity
      }
    })

    // take out zeroes items
    newCart = newCart.filter(i => i.variantQuantity !== 0)
    setCart(newCart)

   const data = await updateShopifyCheckout(newCart, checkoutId)
    localStorage.setItem("checkout_id", JSON.stringify([newCart, data]))
  }

  return (
    <CartContext.Provider value={{
      cart,
      cartOpen,
      setCartOpen,
      addToCart,
      checkoutUrl,
      setDrawer,
      drawer,
      wishList,
      setWishList,
      accessToken,
      SetAccessToken,
      customerInfo,
      collection,
      setCustomerInfo,
      updateCartItemQuantity,
      getCustInfo
    }}>
      {children}
    </CartContext.Provider>
  )
}

const ShopConsumer = CartContext.Consumer

export { ShopConsumer, CartContext }