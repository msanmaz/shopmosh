import { createContext, useState, useEffect } from 'react'
import { updateShopifyCheckout } from '../lib/helpers'
import { createCheckout,getCollection, getCustomerInfo } from '../lib/shopify'
import { useModalDropDown } from "context/modal-context"


const CartContext = createContext()

export default function ShopProvider({ children }) {
  const [cart, setCart] = useState([])
  const [cartOpen, setCartOpen] = useState(false)
  const [checkoutId, setCheckoutId] = useState('')
  const [checkoutUrl, setCheckoutUrl] = useState('')
  const [drawer, setDrawer] = useState(false)
  const [loading, setLoading] = useState(false)
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

  const { timedOpen } = useModalDropDown()


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

  console.log(accessToken,'context accesstoken')
  console.log(customerInfo,'customerInfo context')

    }
  }, [])

  useEffect(() => {
    const fetchCats = async () => {
      const collection = await getCollection()
      setCollection(collection)
    }
    fetchCats()

  }, [])


    useEffect(()=> {
      const fetchCats = async () => {
        const data = await getCustInfo(accessToken.accessToken)
        localStorage.setItem("customer", JSON.stringify([data]))
        setCustomerInfo(data)
       }
       fetchCats()

    },[accessToken])
  
 async function getCustInfo(aToken){
  if(aToken){
    const data = await getCustomerInfo(aToken)
    localStorage.setItem("customer", JSON.stringify([data]))
    return data
  }
 }



  async function addToCart(newItem) {
    if (cart.length === 0) {
      setLoading(prevState => !prevState)
      setCart([...cart,newItem])
      const checkout = await createCheckout(newItem.variantId, newItem.variantQuantity)

      setCheckoutId(checkout.id)
      setCheckoutUrl(checkout.webUrl)
      timedOpen()
      setLoading(prevState => !prevState)
      localStorage.setItem("checkout_id", JSON.stringify([newItem, checkout]))
    } else {
      setLoading(prevState => !prevState)
      let newCart = [...cart]
      let added = false
      newCart.map(item => {
        console.log(item,'itemformap')
        if (item.variantId === newItem.variantId) {
          item.variantQuantity += newItem.variantQuantity
          added = true
        }
      })
      let newCartWithItem = [...newCart]

      if (added) {
      }else {
        newCartWithItem = [...newCart,newItem]
      }
    
      setCart(newCartWithItem)
      const newCheckout = await updateShopifyCheckout(newCartWithItem,checkoutId )
      setLoading(false)
      timedOpen()
      localStorage.setItem("checkout_id", JSON.stringify([newCartWithItem, newCheckout]))
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
      loading,
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