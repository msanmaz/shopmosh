import Head from 'common/Head'
import Hero from 'components/Hero'
import Nav from 'components/NavBar/Nav-Bar'
import React from 'react'
import { useContext } from 'react'
import { CartContext } from 'context/shopContext'

export default function Home() {
  const { getCat} = useContext(CartContext)

  React.useEffect(() => {
    const fetchCats = async ()=> {
      const data = await getCat()
    } 
    fetchCats()
  },[])

  return (
<>
<Head
        title="HOME "
        description="Shop all available models only at the ACME. Worldwide Shipping. Secure Payment."
      />
      <Nav/>
      <Hero/>
</>
  )
}

