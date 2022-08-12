
import React from 'react'

import { useState } from "react"
import Login from "../../components/Login/User-Login"
import Register from '../../components/Register/User-Register'
import Layout from '../../common/Layout/lay-out'
import { useContext } from 'react'
import { CartContext } from 'context/shopContext'
import { useRouter } from 'next/dist/client/router'
import ReactCountryFlag from 'react-country-flag'
import Head from 'next/head'





const LoginUser = () => {
  const router = useRouter()
  const [currentView, setCurrentView] = useState('Login')
  const { accessToken, customerInfo, setCustomerInfo, SetAccessToken, getCustInfo } = useContext(CartContext)


  React.useEffect(() => {
    if (customerInfo) {
      router.push(`/account/${customerInfo[0].firstName}`)
    }
  }, [])



  return (
    <>
    <Head>
    <title>RLVX | Account</title>

    </Head>
      <div className="w-full flex justify-center py-24">
        {currentView === "Login" ? <Login setCurrentView={setCurrentView} /> : <Register setCurrentView={setCurrentView} />}
      </div>
    </>
  )
}


export default LoginUser

LoginUser.getLayout = (page) => {
  return <Layout title={'LOGIN'}>{page}</Layout>
}
