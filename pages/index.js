import Head from 'common/Head'
import Hero from 'components/Hero'
import Nav from 'components/NavBar/index'
import Image from 'next/image'

export default function Home() {
  return (
<>
<Head
        title="Home"
        description="Shop all available models only at the ACME. Worldwide Shipping. Secure Payment."
      />
      <Nav/>
      <Hero/>
</>
  )
}
