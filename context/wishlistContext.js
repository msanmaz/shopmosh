import { createContext, useState, useEffect } from 'react'


const wishListContext = createContext()





export default function ShopProvider({ children }) {

  const [wishList, setWishList] = useState(() => {
    if (typeof window !== 'undefined') {
      return JSON.parse(window.localStorage.getItem('likes')) || { items: [] }
    }
  });

  useEffect(()=>{
    setWishList(window.localStorage.getItem('likes'))
  },[])

  return (
    <wishListContext.Provider value={{
    
    }}>
      {children}
    </wishListContext.Provider>
  )
}

const ShopConsumer = CartContext.Consumer

export { ShopConsumer, CartContext }