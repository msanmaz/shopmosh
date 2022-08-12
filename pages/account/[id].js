import React from 'react'
import { useContext } from 'react'
import { CartContext } from 'context/shopContext'
import {useRouter } from 'next/router'
import { getCustomerInfo } from 'lib/shopify'
import Layout from '../../common/Layout/lay-out'
import Head from 'next/head'




const Profile = () => {
  const { accessToken, customerInfo,setCustomerInfo,SetAccessToken } = useContext(CartContext)
  const router = useRouter()
  const [isSSR, setIsSSR] = React.useState(true);


  React.useEffect(() => {
    setIsSSR(false);
    if(!accessToken){
      router.push('/account/login')
    }
  }, []);

  React.useEffect(() => {
    console.log('logged-In')
  }, [customerInfo]);


  const handleClick = () => {
    localStorage.removeItem('user')   
   localStorage.removeItem('customer')
   setCustomerInfo('')
   SetAccessToken('')
   setTimeout(() => {
   router.push('/')
  }, 1000);
  }



    return (
      <>
      <Head>
      <title>RLVX | Account</title>

      </Head>
        <div className='py-[5rem]'>
          <div className='flex flex-col items-center justify-center'>
            <p className='text-black bebas text-4xl py-2'>{customerInfo && `Welcome ${customerInfo[0]?.firstName}`} </p>
            <button onClick={handleClick} className='btn btn-ghost'>Logout</button>
          </div>
        </div>
      </>
    )
  }


export default Profile

Profile.getLayout = (page) => {
  return <Layout title={'Account'}>{page}</Layout>
}
